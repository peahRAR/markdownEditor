import { render } from '@testing-library/react';
import { marked } from 'marked';
import React, { Component } from 'react';

import './css/App.css';
import { sampleText } from './sampleText';


class App extends Component {
  state = {
    text: sampleText
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({text})
  }

  renderText = text => {
    const __html = marked(text, {sanitize: true})
    return { __html}
  }

  render() {
    return (
      <div className='flex justify-center flex-col items-center '>
        <h1 className='font-bold text-2xl my-4 '>Markdown editor</h1>

        <div className='container flex justify-between flex-wrap'>

          {/* Bloc input pour écrire en markdown */}
          <section className='lg:w-2/4 sm:w-full px-2 my-4'>
            <textarea className='w-full h-full resize-none bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300' rows="35" value={this.state.text} 
            onChange={this.handleChange}>
            </textarea>
          </section>

          {/* Bloc de reponse */}
          <section className='lg:w-2/4 sm:w-full px-2 my-4'>
            <div className=' h-full w-full resize-none bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight hover:outline-none  hover:border-blue-300'>
              <div className='unreset' dangerouslySetInnerHTML={this.renderText(this.state.text) }></div>
            </div>
          </section>

        </div>
      </div>
    );
  }
}


export default App;
