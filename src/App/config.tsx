import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

export const config: Config = {
  name: {
    display: 'Ruthvik Kamarasu',
  },
  title: {
    display: 'Software Engineer | Grad Student @ SJSU',
  },
  buttons: [
    {
      name: 'github',
      display: 'GitHub',
      ariaLabel: 'GitHub profile (opens in new window)',
      icon: <GitHub />,
      href: 'https://github.com/kamarasuruthvik/',
    },
    {
      name: 'linked-in',
      display: 'LinkedIn',
      ariaLabel: 'LinkedIn profile (opens in new window)',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/ruthvik-kamarasu-984a23166/',
    },
    {
      name: 'resume',
      display: 'Resume',
      ariaLabel: 'Resume in Google Drive (opens in new window)',
      icon: <Resume />,
      href: 'https://docs.google.com/document/d/1e_jRbAoZ5mq_JqUtFyjpx9ira6Y-qZQlKRLS8A53sgg/edit?usp=sharing',
    },
    {
      name: 'email',
      display: 'Email',
      ariaLabel: 'Email contact (opens in new window)',
      icon: <Email />,
      href: 'mailto:shivasairuthvik.kamarasu@sjsu.edu',
    },
  ],
};
