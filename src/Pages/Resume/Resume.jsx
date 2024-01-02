import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { pdfjs } from 'react-pdf';
import resume from "../../assets/resume/Alfred's Resumé.pdf";
import './resume.scss';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const errorMsg = 'Failed to load the PDF, please download it instead.'

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
      <h1>Resumé</h1>
      <a href={resume} download>
        Download Resumé
      </a>
      <Document
        className='pdfResume'
        file={resume}
        externalLinkTarget='_blank'
        error={errorMsg}
      >
        <Page
          pageNumber={1}
          scale={width > 767 ? 1 : width > 499 ? 0.75 : 0.5}
        />
      </Document>
    </section>
  );
};
export default Resume;
