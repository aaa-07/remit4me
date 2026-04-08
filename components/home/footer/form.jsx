import Image from "next/image";
import { useEffect, useState } from "react";

const Form = ({ setShowForm }) => {
  const [status, setStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="backdrop-blur-2xl h-screen flex items-center justify-center fixed inset-0 z-50">
      {/* Waitlist Form Modal */}
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-4xl p-10 w-[90vw] h-[90vh] mx-4 border border-[#DCDCDC] relative flex flex-col">
          {/* Close button */}
          <div
            className="absolute top-5 right-5 cursor-pointer z-50"
            onClick={() => setShowForm(false)}
          >
            <Image
              src="/images/home/close.svg"
              alt="close"
              width={11}
              height={11}
            />
          </div>

          {/* PDF */}
          <iframe
            src="/Remit4Me_Privacy_Policy.pdf"
            className="w-full h-full rounded z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
