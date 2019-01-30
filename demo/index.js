import React from 'react';
import { render } from 'react-dom';

import { Tooltipster, TooltipsterSVG } from '../src'

import 'tooltipster/dist/css/tooltipster.bundle.css'

const Component = () => {
  return (
    <div>
      <h1>Demo!</h1>
      <Tooltipster content={<b>Tool<i>tip</i>!</b>} side='bottom'>
        I have a tooltip!
      </Tooltipster>
      <br />
      <br />
      <TooltipsterSVG content={<b>Tool<i>tip</i>!</b>} side='right'>
        I have a tooltip!
      </TooltipsterSVG>
    </div>
  )
}

render(<Component />, document.getElementById('app'));
