import React from "react";
import qrcode from "../assets/QRCODE.jpg"
const DonationCard = () => {
  return (
    <div className="w-full h-96 flex flex-col bg-white  p-6 space-y-6">
      {/* Text Section */}
      <div className="ml-36 top-44">
        <h2 className="text-xl font-bold mb-2">India</h2>
        <p>Donate in AID of Shyama seva dham Trust</p>
        <p className="text-sm text-gray-500">Only For Indian Devotee</p>
        <div className="mt-4 space-y-1">
          <p>
            <span className="font-bold">Beneficiary Name: </span>
            Shyama seva dham
          </p>
          <p>
            <span className="font-bold">Bank Name: </span>KOTAK Bank
          </p>
          <p>
            <span className="font-bold">Account No.: </span>3250004750
          </p>
          <p>
            <span className="font-bold">IFSC Code: </span>kkbk0005032
          </p>
         
          <p>
            <span className="font-bold">UPI ID: </span>
            <span className="text-blue-500">shyamasevadham@kotak</span>
          </p>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="flex flex-col items-center justify-end relative bottom-72 left-60"> {/* Adjusted bottom */}
  <img
    src={qrcode}
    alt="Scan QR Code"
    className="w-80 h-96"
  />
</div>

    </div>
  );
};

export default DonationCard;
