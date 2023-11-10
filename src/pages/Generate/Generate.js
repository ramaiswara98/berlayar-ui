import React from 'react'

import './Generate.css'
import Button from '../../shared_component/Button/Button'
import ImagePlaceholder from '../../assets/images/img_placeholder.png'

function Generate() {
  return (
    <div className='generate-container'>
      <div>
        <p className='normal-text'>Enter Prompt:</p>
        <div className='generate-box-container row'>
          <div className='col-8'>
          <div className='generate-box row'>
            <div className='col-4'>
            <p className='generate-box-text'>Generate post assets</p>
            </div>
            <div className='col-8'>
            <select class="form-select" aria-label="Default select example">
              <option selected>Topic Drowdown</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            </div>
          </div>
          </div>
          <div className='col-4'>
          <Button text={'Generate'} primary={true} padding={'15px 10px'} width={"100%"}/>
          </div>
        </div>
      </div>
      <div className='row generate-second-row'>
        <div className='col-4'>
          <p className='normal-text'>For:</p>
          <select class="form-select" aria-label="Default select example">
              <option selected>Audience</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
        </div>
        <div className='col-4'>
          <p className='normal-text'>In a:</p>
          <select class="form-select" aria-label="Default select example">
              <option selected>Voice Tone</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
        </div>
        <div className='col-4'>
          <p className='normal-text'>To:</p>
          <select class="form-select" aria-label="Default select example">
              <option selected>Goal</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
        </div>
      </div>

      <div className='generate-third-row'>
        <p className='normal-text'>In languages:</p>
        <div className='generate-checkbox-container'>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              English
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Mandarin
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Malay
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Tamil
            </label>
          </div>
        </div>
      </div>

      <div className='generate-four-row'>
        <p className='normal-text'>Result</p>
        <div className='result-card'>
          <img src={ImagePlaceholder}  alt="result"/>
          <div className='result-content'>
            <p className='normal-text'><b>Social Media Marketing Plan</b></p>
            <p className='normal-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
        <div className='result-card'>
          <img src={ImagePlaceholder}  alt="result"/>
          <div className='result-content'>
            <p className='normal-text'><b>Social Media Marketing Plan</b></p>
            <p className='normal-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
        <div className='result-card'>
          <img src={ImagePlaceholder}  alt="result"/>
          <div className='result-content'>
            <p className='normal-text'><b>Social Media Marketing Plan</b></p>
            <p className='normal-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
        <div className='result-card'>
          <img src={ImagePlaceholder}  alt="result"/>
          <div className='result-content'>
            <p className='normal-text'><b>Social Media Marketing Plan</b></p>
            <p className='normal-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
        <div className='result-card'>
          <img src={ImagePlaceholder}  alt="result"/>
          <div className='result-content'>
            <p className='normal-text'><b>Social Media Marketing Plan</b></p>
            <p className='normal-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Generate