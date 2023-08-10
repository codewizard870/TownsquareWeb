import { useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className="relative flex pt-40 bg-black md:pt-40">
        <div className="items-center justify-center px-[10%] lg:px-[20%]">
          <div>
            <Link
              className="text-[#B882FF] flex md:text-[22px] font-Outfit font-medium md:leading-[34px]"
              to="/"
            >
              <img src="/images/ArrowLeft.svg" className="mr-2" alt="back"/>
              Back to website
            </Link>
          </div>
          <h1 className="md:text-[48px] font-bold font-Outfit py-4">
            Privacy Policy
          </h1>
          <div>
            <p className="md:text-[22px] mb-8 md:eading-[34px] font-normal font-Outfit">
                Privacy Policy eTown PTE. LTD. <br /> Last Updated: Aug 1st,
              2023
            </p>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                1. Introduction{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                eTown PTE. LTD. ("Company", "we", "us" or "our") respects your 
                privacy and is committed to protecting it through our compliance 
                with this Privacy Policy. This policy describes the types of 
                information we may collect from you or that you may provide when 
                you visit the website https://www.townesquare.xyz and our practices 
                for collecting, using, maintaining, protecting, and disclosing that 
                information.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                2. Information We Collect About You and How We Collect It{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal mb-8 font-Outfit">
                We collect several types of personal information from and about 
                users of our website, including identifiers like name, email address,
                 IP address, and more. This information is collected directly from 
                 you, automatically as you navigate the site, and from third parties, 
                 for example, our business partners.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                3. Information You Provide to Us{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                This includes information you provide at the time of registering, 
                subscribing to our services, posting material, or requesting further 
                services.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                4. Information We Collect Through Automatic Data Collection Technologies​{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                As you navigate through our website, we may use technologies like cookies, 
                web beacons, and other tracking mechanisms to collect data about your 
                online patterns and preferences.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                5. Third-Party Use of Cookies and Other Tracking Technologies{" "}
              </h5>
              <p className="md:text-[22px] lg:leading-[34px] font-normal font-Outfit">
                Some content or applications on our website are served by third 
                parties who may use cookies or other tracking technologies to 
                collect information about you.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                6. Do Not Track{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                Our website does not currently respond to "Do Not Track" signals.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                7. Information about Minors{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                Our website is not intended for children under 13 years of age, 
                and we do not knowingly collect personal information from children 
                under 13.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                8. How We Use Your Information{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                We use the information we collect to operate, improve, and personalize 
                our website and services, to communicate with you, for advertising and 
                marketing, and for other business purposes.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                9. Disclosure of Your Information{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                We may disclose aggregated information about our users and information 
                that does not identify any individual. We may also share your personal 
                information with third parties under certain circumstances.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                10. Retention of Your Information{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                We retain your personal information for as long as necessary to fulfill 
                the purposes for which it was collected, unless otherwise required by 
                law.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                11. Choices About How We Use and Disclose Your Information{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                You have certain rights and choices regarding the personal information 
                we collect and how it's used, including the ability to opt out of 
                receiving marketing communications from us.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                12. Where Your Personal Information is Held{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                Your information may be held at our offices and on servers located in 
                the United States or other countries.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                13. Legal Basis for Processing Personal Data under General Data Protection Regulation (GDPR){" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                For users in the European Union, we process your data in accordance with 
                the provisions of the GDPR.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                14. Accessing and Correcting Your Information{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                You can review and change your personal information by logging into the 
                website and visiting your account profile page.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                15. Your California Privacy Rights California{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                Residents may have additional rights regarding the collection, use, and 
                sharing of their personal information.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                16. Data Security{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                We have implemented measures designed to secure your personal 
                information from accidental loss and unauthorized access, use, 
                alteration, and disclosure.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                17. Individuals with Disabilities{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                We strive to ensure that our website and services are accessible 
                to individuals with disabilities.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                18. Changes to Our Privacy Policy{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                It is our policy to post any changes we make to our privacy policy 
                on this page.
              </p>
            </div>
          </div>
          <div className="mb-20">
            <Link
              className="text-[#B882FF] flex text-[22px] font-Outfit font-medium leading-[34px]"
              to="/"
            >
              <img src="/images/ArrowLeft.svg" className="mr-2" alt="back"/>
              Back to website
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
