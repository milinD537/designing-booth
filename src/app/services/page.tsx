import React from 'react';
import Services from "@/components/services";

const EventHeader = () => {
  return (
    <div>
      <div className="servicesWrapper | -mt-20 ~mt-28p pt-28 lg:px-12 mx-auto max-w-3xl mb-8 bg-gradient-to-r from-blue-50 to-amber-50 rounded-lg shadow-md">
        <div className="p-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-blue-600">
              SHOURYA CUP SEASON-4
            </h1>
            <div className="space-y-2">
              <p className="text-lg font-medium">
                ORGANIZED BY
                <span className="text-blue-600"> JDF-MUMBAI</span>
              </p>
              <p className="text-lg">
                PRESENTED BY
                <br />
                <span className="font-semibold">DR. C. L. CHOUHAN</span>
              </p>
              <p className="text-lg">
                EVENT SPONSORED BY
                <br />
                <span className="font-semibold">DR. GHEWARCHAND BOHRA</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="servicesWrapper | -mt-20 ~mt-28p pt-28 lg:px-12">
        <Services />
        <iframe
          width="100%"
          scrolling="no"
          className="
            h-[1100px]
            max-[320px]:h-[900px]
            min-[321px]:h-[960px]
            min-[384px]:h-[1010px]
            min-[420px]:h-[1100px]
            md:h-[680px]
            lg:rounded-3xl
            md:mt-10
            bg-gradient-to-r from-primary to-[#F0A91A]
          "
          src="https://bento.me/octoreach"
          title="Octoreach services"
        />
      </section>
    </div>
  );
};

export default EventHeader;