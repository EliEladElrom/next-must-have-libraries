/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
*/

import { passwordCheckHandler } from '@storyofams/next-password-protect';

export default passwordCheckHandler('password', {
  cookieName: 'next-password-protect',
});
