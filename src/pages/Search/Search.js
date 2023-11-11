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
        <div className='search-result-container'>
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

        
        <div className='search-detail-container'>
         <div className='search-detail-card'>
            <img src={ImagePlaceholder}  alt="result" className='search-detail-img'/>
            <div className='search-result-content'>
              <p className='title-text'><b>Social Media Marketing Plan</b></p>
              <p className='normal-text'>Data type: .doc</p>
              <p className='normal-text'>User129089374</p>
              <p className='normal-text'>Language: ENG</p>
              <p className='normal-text'>Age: 18</p>
              <p className='normal-text'>Interest: [Music][Illustration]</p>
            </div>
          </div>
          <div className='description-container'>
            <p className='normal-text'>Description</p>
            <p className='normal-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className='search-detail-button-container'>
            <Button text="Download" primary={true} width={'180px'}/><span/>
            <Button text="Bookmark" primary={false} width={'180px'}/><span/>
            <Button text="Share" primary={false} width={'180px'}/>
          </div>
        </div>
    </div>
  )
}

export default Search