'use client';

import React, { useRef, useState } from 'react';

import { Button, TextField } from '@/components';
import { X } from '@/components/Icon';
import { MB } from '@/constants/unit';
import roundToNDecimal from '@/utils/roundToNDecimal';

type Props = {
  label?: string;
  accept?: string;
  className?: string;
  multiple?: boolean;
  maxSizeMB?: number;
  placeholder?: string;
  onFileSelect?: (file: File) => void;
  onClear?: () => void;
};

const FileUpload = ({
  label,
  accept,
  multiple = false,
  maxSizeMB = 5,
  placeholder,
  onFileSelect,
  onClear,
}: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textFieldRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');
  const [fileSize, setFileSize] = useState<number>(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (file.size > maxSizeMB * MB) {
        alert('파일 크기가 너무 큽니다.');
        return;
      }
      setFileName(file.name);
      setFileSize(roundToNDecimal(file.size / MB, 2));
      onFileSelect?.(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const clearFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setFileName('');
    onClear?.();
  };

  return (
    <div className="flex items-end justify-between gap-8">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={accept}
        multiple={multiple}
        className="hidden"
      />
      <div className="flex-1">
        <TextField
          ref={textFieldRef}
          label={label}
          placeholder={placeholder}
          value={fileName ? `${fileName} (${fileSize}MB)` : ''}
          rightIcon={
            fileName ? (
              <button type="button" onClick={clearFile}>
                <X />
              </button>
            ) : undefined
          }
          readOnly
        />
      </div>
      <Button type="button" variant="outlinePrimary" onClick={handleClick}>
        파일 등록
      </Button>
    </div>
  );
};

export default FileUpload;
