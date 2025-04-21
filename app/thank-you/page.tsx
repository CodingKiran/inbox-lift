import React from "react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          Hooray! The first lesson of the &quot;SaaS Founder Blueprint&quot; is
          on its way to your inbox.
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Within the next minute or two, you&apos;re going to get an email from
          us (Inbox Lift).
        </p>
        <p className="text-lg text-gray-700 mb-4">
          This email contains instructions to get started with our Saas Founder
          Blueprint Email Course, so be sure to check it out!
        </p>
        <p className="text-lg text-gray-700 mb-4">
          But if you have any questions, don&apos;t hesitate to hit reply and
          let me know&mdash;I&apos;ll be happy to help! :-)
        </p>
        <p className="text-lg text-gray-700 mb-4 font-semibold">
          Now go and check your inbox!
        </p>
        <p className="text-sm text-gray-500 mt-8">
          P.S. If you don&apos;t find the email in your inbox in the next couple
          of minutes, please check your spam folder...
          <br />
          Chances are it ended up there.
          <br />
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
