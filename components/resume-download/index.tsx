'use client';

import { FileDown } from 'lucide-react';

import { Button } from '#/components/ui/button';

const ResumeDownload = () => {
    const handleDownloadPdf = () => {
        const link = document.createElement('a');
        link.href = '/files/resume/cv_hridel_jan.pdf';
        link.download = 'cv_hridel_jan.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownloadDocx = () => {
        const link = document.createElement('a');
        link.href = '/files/resume/Resume_Jan_Hridel.docx';
        link.download = 'Resume_Jan_Hridel.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex flex-col gap-3 lg:flex-row items-center justify-center">
            <Button
                onClick={handleDownloadPdf}
                className="w-full lg:w-auto flex items-center"
            >
                <FileDown className="w-4 h-4 mr-2" />
                Download CV (pdf)
            </Button>

            <Button
                onClick={handleDownloadDocx}
                variant="secondary"
                className="w-full lg:w-auto flex items-center"
            >
                <FileDown className="w-4 h-4 mr-2" />
                Download ATS compatible full CV (docx)
            </Button>
        </div>
    );
};

export default ResumeDownload;
