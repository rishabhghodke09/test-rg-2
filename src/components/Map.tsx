import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15073.738850809548!2d72.9602999!3d19.1762063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8507eb997a5fd141!2sShivaami!5e0!3m2!1sen!2sin!4v1658986881738!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      />
    </div>
  );
};

export default Map;