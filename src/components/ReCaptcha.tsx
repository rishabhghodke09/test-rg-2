import ReCAPTCHA from "react-google-recaptcha";

interface ReCaptchaProps {
  onChange: (token: string | null) => void;
}

export const ReCaptcha = ({ onChange }: ReCaptchaProps) => {
  return (
    <div className="flex justify-center my-4">
      <ReCAPTCHA
        sitekey="YOUR_SITE_KEY_HERE"
        onChange={onChange}
        theme="dark"
      />
    </div>
  );
};