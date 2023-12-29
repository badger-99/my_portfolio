import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './resume.scss';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='pages' id='resume'>
      <h1>Resume</h1>
      <a href='Resume(needs updating).pdf' download>
        Download Resume
      </a>
      <Document
        className='pdfResume'
        file={'Resume(needs updating).pdf'}
        externalLinkTarget='_blank'
      >
        <Page pageNumber={1} scale={width > 767 ? 1 : width > 499? 0.75: 0.5} />
      </Document>
    </section>
  );
};
export default Resume;
