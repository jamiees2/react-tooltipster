import React from 'react';
import { render } from 'react-dom';

import { Tooltipster, TooltipsterSVG } from '../src'

import 'tooltipster/dist/css/tooltipster.bundle.css'

const Component = () => {
  const ovalProps = {
    id: "Oval-1",
    fill: "#FF7979",
    cx: "142.5",
    cy: "147.5",
    r: "92.5"
  }
  return (
    <div>
      <h1>Demo!</h1>
      <Tooltipster content={<b>Tool<i>tip</i>!</b>} side='bottom'>
        I have a tooltip!
      </Tooltipster>
      <br />
      <br />
      <svg width="100%" viewBox="0 0 768 447" version="1.1">
          <defs>
              <rect id="path-1" x="0" y="0" width="768" height="447"></rect>
              <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="768" height="447" fill="white">
                  
              </mask>
          </defs>
          <g id="journocode" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="example">
                  <TooltipsterSVG rootType="circle" rootProps={ovalProps} content="I am a circle!" side="right"></TooltipsterSVG>
                  <polygon id="Star-1" fill="#FFF681" points="384 349 328.748186 378.047597 339.300344 316.523799 294.600687 272.952403 356.374093 263.976201 384 208 411.625907 263.976201 473.399313 272.952403 428.699656 316.523799 439.251814 378.047597" class="tooltip" title="<strong>Stars for the win</strong><br>I am a star!"></polygon> 
                  <polygon id="Triangle-1" fill="#A9FFEC" points="619 72 717 223 521 223" class="tooltip" title="<p style='color:#F85D00'>Hell yeah!</p>"></polygon> 
              </g> 
          </g> 
      </svg> 
    </div>
  )
}

render(<Component />, document.getElementById('app'));
