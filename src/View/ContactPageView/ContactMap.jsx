import React from 'react';

const GoogleMap = () => {
    return (
        <div className="w-full h-[400px]">
            <iframe
                title="Google Map"
                width="100%"
                height="100%"

                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.178347760359!2d73.12854647469152!3d31.409211952627206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922687ef964996d%3A0x172aaf37287f476e!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1703154802708!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
