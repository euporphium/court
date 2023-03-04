import { FaEnvelope, FaGithub, FaLinkedin, FaPaypal } from 'react-icons/fa';

export default function Links() {
  return (
    <div className="flex justify-around rounded bg-stone-700 p-2 text-stone-50 dark:bg-stone-500">
      <a href="https://github.com/euporphium" title="Daniel Newton's GitHub">
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/kennethdnewton/"
        title="Daniel Newton's LinkedIn"
      >
        {/*color="#0A66C2"*/}
        <FaLinkedin size={24} />
      </a>
      <a href="mailto:kdaniel.newton@gmail.com" title="Email Daniel Newton">
        <FaEnvelope size={24} />
      </a>
      <a
        href="https://paypal.me/euporphium?country.x=US&locale.x=en_US"
        title="Donate to Daniel Newton"
      >
        {/*color="#142C8E"*/}
        <FaPaypal size={24} />
      </a>
    </div>
  );
}
