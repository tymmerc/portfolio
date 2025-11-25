import { useEffect, useRef, useState } from 'react';

const DEFAULT_TYPE_SPEED = 65;
const DEFAULT_DISPLAY_PAUSE = 3200;
const DEFAULT_ERASE = 18;

export const useTypewriterCycle = (sentences: string[]) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!sentences.length) return undefined;
    const currentSentence = sentences[indexRef.current];
    let timeout: number;

    if (!isDeleting && text.length < currentSentence.length) {
      timeout = window.setTimeout(() => {
        setText(currentSentence.slice(0, text.length + 1));
      }, DEFAULT_TYPE_SPEED);
    } else if (!isDeleting && text.length === currentSentence.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), DEFAULT_DISPLAY_PAUSE);
    } else if (isDeleting && text.length > 0) {
      timeout = window.setTimeout(() => {
        setText(currentSentence.slice(0, text.length - 1));
      }, DEFAULT_ERASE);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      indexRef.current = (indexRef.current + 1) % sentences.length;
    }

    return () => window.clearTimeout(timeout);
  }, [isDeleting, sentences, text]);

  return text;
};
