/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
*/

import { loginHandler } from '@storyofams/next-password-protect';

export default loginHandler('password', {
  cookieName: 'next-password-protect',
  cookieSecure: false,
});
