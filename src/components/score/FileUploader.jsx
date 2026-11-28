import React, { useEffect, useRef, useState } from 'react';
import { formatFileSize } from './scoreRules';

const ACCEPTED_TYPES = ['image/png', 'image/jpeg', 'image/webp'];
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_FILES = 5;

function Thumbnail({ file }) {
  const imgRef = useRef(null);

  // The preview URL is released when the file is removed or the page changes.
  useEffect(() => {
    const url = URL.createObjectURL(file);
    imgRef.current.src = url;
    return () => URL.revokeObjectURL(url);
  }, [file]);

  return (
    <img
      ref={imgRef}
      alt={`Preview of ${file.name}`}
      className="w-14 h-14 rounded-md object-cover border border-white/10 bg-[#111522] shrink-0"
    />
  );
}

export default function FileUploader({ files, onChange, error, disabled }) {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rejected, setRejected] = useState([]);

  const addFiles = (fileList) => {
    if (disabled) return;
    const accepted = [...files];
    const problems = [];

    Array.from(fileList).forEach((file) => {
      const duplicate = accepted.some(
        (f) =>
          f.name === file.name && f.size === file.size && f.lastModified === file.lastModified
      );
      if (!ACCEPTED_TYPES.includes(file.type)) {
        problems.push(`${file.name}: only PNG, JPG, or WEBP images are allowed.`);
      } else if (file.size > MAX_FILE_SIZE) {
        problems.push(`${file.name}: file is larger than 5 MB.`);
      } else if (duplicate) {
        problems.push(`${file.name}: already added.`);
      } else if (accepted.length >= MAX_FILES) {
        problems.push(`${file.name}: limit of ${MAX_FILES} screenshots reached.`);
      } else {
        accepted.push(file);
      }
    });

    setRejected(problems);
    onChange(accepted);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const handleRemove = (index) => {
    setRejected([]);
    onChange(files.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-[#111522] border border-white/10 rounded-xl p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold text-white">Screenshot Evidence *</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Upload the post-game scoreboard, ideally one screenshot per game played
          </p>
        </div>
        <span className="px-2.5 py-1 text-[11px] font-medium rounded bg-purple-500/15 text-purple-300 border border-purple-500/25">
          {files.length}/{MAX_FILES} Files
        </span>
      </div>

      <button
        type="button"
        disabled={disabled || files.length >= MAX_FILES}
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`w-full border border-dashed rounded-lg px-4 py-8 flex flex-col items-center gap-2 text-center transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
          isDragging
            ? 'bg-purple-500/15 border-purple-500'
            : error
            ? 'bg-[#1a2033] border-rose-500/60'
            : 'bg-[#1a2033] border-white/15 hover:border-purple-500/60'
        }`}
      >
        <svg
          className="w-7 h-7 text-purple-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16V4m0 0L7 9m5-5l5 5M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
          />
        </svg>
        <span className="text-xs font-semibold text-white">
          Drag &amp; drop screenshots here, or click to browse
        </span>
        <span className="text-[11px] text-slate-400">PNG, JPG, or WEBP · Max 5 MB each</span>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_TYPES.join(',')}
        multiple
        className="hidden"
        onChange={(e) => {
          addFiles(e.target.files);
          // Lets the same file be picked again after it was removed.
          e.target.value = '';
        }}
      />

      {(error || rejected.length > 0) && (
        <div role="alert" className="space-y-1 text-[11px] text-rose-300">
          {error && <p>{error}</p>}
          {rejected.map((message) => (
            <p key={message}>{message}</p>
          ))}
        </div>
      )}

      {files.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${file.size}-${file.lastModified}`}
              className="bg-[#1a2033] border border-white/5 rounded-lg p-3 flex items-center gap-3 min-w-0"
            >
              <Thumbnail file={file} />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white truncate">{file.name}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{formatFileSize(file.size)}</p>
              </div>
              <button
                type="button"
                disabled={disabled}
                onClick={() => handleRemove(index)}
                aria-label={`Remove ${file.name}`}
                className="text-slate-500 hover:text-rose-300 text-xs cursor-pointer shrink-0"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}