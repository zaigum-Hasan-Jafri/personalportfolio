import React, { useState } from 'react'
import "./Button.scss"
const Button = () => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleDownload = () => {
        setIsDownloading(true);
        setTimeout(() => {
            setIsDownloading(false);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
            }, 2000);
        }, 2500);
    };

    return (
        <div className='button'>
            <button className="download-button" onClick={handleDownload}>
                {isDownloading ? (<>
                    <span className="loader"></span>
                </>
                ) : isSuccess ? (
                    <div>
                        <i className="bi bi-check2-circle"></i> Resume Downloaded
                    </div>
                ) : (
                    <div>
                        <i className="bi bi-file-text" ></i> Download Resume
                    </div>
                )
                }
            </button >
        </div >
    )
}

export default Button

