// shareBtn.tsx
import {
  FacebookShareButton,
  HatenaShareButton,
  LineShareButton,
  TwitterShareButton,
  FacebookIcon,
  HatenaIcon,
  LineIcon,
  TwitterIcon,
} from 'react-share';

// react-share
const URL = 'https://example.com/';
const QUOTE = 'この記事を読んでいます...';

export const ShareBtn = () => {
  return (
    <div>
      <TwitterShareButton url={URL} title={QUOTE}>
        {/* <TwitterIcon size={24} round /> */}
        <span className='react-sharing-button__text'>
          <TwitterIcon size={24} round />
        </span>
      </TwitterShareButton>
      <HatenaShareButton
        className='ml-5'
        url={URL}
        title={QUOTE}
        windowWidth={660}
        windowHeight={460}
      >
        <HatenaIcon size={24} round />
      </HatenaShareButton>
      <LineShareButton className='ml-5' url={URL} title={QUOTE}>
        <LineIcon size={24} round />
      </LineShareButton>
      <FacebookShareButton className='ml-5' url={URL} quote={QUOTE}>
        <FacebookIcon size={24} round />
      </FacebookShareButton>
    </div>
  );
};
