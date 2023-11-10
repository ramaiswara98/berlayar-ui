import React from 'react'

import './Search.css'
import Input from '../../shared_component/Input/Input'
import Button from '../../shared_component/Button/Button'
import ImagePlaceholder from '../../assets/images/img_placeholder.png'

function Search() {
  return (
    <div>
        <div className='search-first-row'>
            <Input type={'text'} placeholder={'Search ...'} width={"400px"}/>
            <span></span>
            <Button text={'Reset'} padding={'10px 10px'} width={'150px'} primary={true}/>
        </div>
        <div className='search-second-row'>
        <div className='search-checkbox-container'>
          <div class="form-check search-checkbox">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Show Embedding values
            </label>
          </div>
          <div class="form-check search-checkbox">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Images
            </label>
          </div>
          <div class="form-check search-checkbox">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Text
            </label>
          </div>
          <div class="form-check search-checkbox">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Title
            </label>
          </div>
          <div class="form-check search-checkbox">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Description
            </label>
          </div>
        </div>
        </div>

        <div className='search-third-row'>
        <div className='search-result-card'>
          <img src={ImagePlaceholder}  alt="result"/>
          <div className='search-result-content'>
            <p className='normal-text'><b>Social Media Marketing Plan</b></p>
            <p className='normal-text'>Data type: .doc</p>
            <p className='normal-text'>User129089374</p>
            <p className='normal-text'>Language: ENG</p>
            <p className='normal-text'>Age: 18</p>
            <p className='normal-text'>Interest: [Music][Illustration]</p>
          </div>
        </div>
        <div className='search-result-card'>
          <img src={ImagePlaceholder}  alt="result"/>
          <div className='search-result-content'>
            <p className='normal-text'><b>Social Media Marketing Plan</b></p>
            <p className='normal-text'>Data type: .doc</p>
            <p className='normal-text'>User129089374</p>
            <p className='normal-text'>Language: ENG</p>
            <p className='normal-text'>Age: 18</p>
            <p className='normal-text'>Interest: [Music][Illustration]</p>
          </div>
        </div>
        <div className='search-result-card'>
          <img src={ImagePlaceholder}  alt="result"/>
          <div className='search-result-content'>
            <p className='normal-text'><b>Social Media Marketing Plan</b></p>
            <p className='normal-text'>Data type: .doc</p>
            <p className='normal-text'>User129089374</p>
            <p className='normal-text'>Language: ENG</p>
            <p className='normal-text'>Age: 18</p>
            <p className='normal-text'>Interest: [Music][Illustration]</p>
          </div>
        </div>
        <div className='search-result-card'>
          <img src={ImagePlaceholder}  alt="result"/>
          <div className='search-result-content'>
            <p className='normal-text'><b>Social Media Marketing Plan</b></p>
            <p className='normal-text'>Data type: .doc</p>
            <p className='normal-text'>User129089374</p>
            <p className='normal-text'>Language: ENG</p>
            <p className='normal-text'>Age: 18</p>
            <p className='normal-text'>Interest: [Music][Illustration]</p>
          </div>
        </div>
        <div className='search-result-card'>
          <img src={ImagePlaceholder}  alt="result"/>
          <div className='search-result-content'>
            <p className='normal-text'><b>Social Media Marketing Plan</b></p>
            <p className='normal-text'>Data type: .doc</p>
            <p className='normal-text'>User129089374</p>
            <p className='normal-text'>Language: ENG</p>
            <p className='normal-text'>Age: 18</p>
            <p className='normal-text'>Interest: [Music][Illustration]</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Search