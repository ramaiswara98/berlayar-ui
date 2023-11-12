import React from "react";

import "./Storage.css";
import Input from "../../shared_component/Input/Input";
import IconReload from "../../assets/icon/ic_reload.png";
import IconGarbage from "../../assets/icon/ic_garbage.png";
import IconDuplicate from "../../assets/icon/ic_duplicate.png";
import IconDownload from "../../assets/icon/ic_download.png";
import IconEyeOpe from "../../assets/icon/ic_open_eye.png";
import IconLeft from "../../assets/icon/ic_left.png";
import IconRight from "../../assets/icon/ic_right.png";
import Button from "../../shared_component/Button/Button";
import TextArea from "../../shared_component/TextArea/TextArea";

function Storage() {
  return (
    <div className="storage-container">
      <div className="storage-first-row">
        <p className="normal-tex">Data Storage</p>
        <div className="progress-container">
          <div className="progress-text-container">
            <p>Storage</p>
            <p>8 GB/25GB</p>
          </div>
          <div className="storage-progress-bar">
            <div
              className="storage-progress-bar-data"
              style={{
                backgroundColor: "#0A0A0C",
                width: "55%",
                height: "25px",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            ></div>
            <div
              className="storage-progress-bar-data"
              style={{
                backgroundColor: "#F4444C",
                width: "20%",
                height: "25px",
              }}
            ></div>
          </div>
          <div className="legend-container">
            <div className="legend-item">
              <div className="legend-item-box"></div>
              <p>Data</p>
            </div>
            <div className="legend-item">
              <div
                className="legend-item-box"
                style={{ backgroundColor: "#F4444C" }}
              ></div>
              <p>Images</p>
            </div>
          </div>
        </div>
      </div>
      <div className="storage-upload-container" style={{ display: "none" }}>
        <div className="storage-second-row">
          <Input placeholder={"Search"} />
          <div className="icon-container">
            <img src={IconReload} alt="icon-reload" />
          </div>
        </div>

        <div className="storage-third-row">
          <div className="storage-table-header row">
            <div class="form-check col-3 checkbox-container">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                class="form-check-label table-data-text"
                for="flexCheckDefault"
              >
                Name
              </label>
            </div>
            <div className="col">
              <p>Access</p>
            </div>
            <div className="col">
              <p>Document</p>
            </div>
            <div className="col">
              <p>Source</p>
            </div>
            <div className="col">
              <p>Size</p>
            </div>
            <div className="col">
              <p>Action</p>
            </div>
          </div>
          <div className="storage-table-data-container">
            <div className="storage-table-data row">
              <div class="form-check col-3 checkbox-container">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label table-data-text"
                  for="flexCheckDefault"
                >
                  ngs_artworks
                </label>
              </div>
              <div className="col access-container">
                <img
                  src={IconEyeOpe}
                  alt="icon-open-eye"
                  style={{ width: "25px", height: "25px" }}
                />
                <select
                  class="form-select select-container"
                  aria-label="Default select example"
                >
                  <option selected>
                    <div>
                      <p>Public</p>
                    </div>
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col">
                <p>2245</p>
              </div>
              <div className="col">
                <p>docarray</p>
              </div>
              <div className="col">
                <p>1.7 GB</p>
              </div>
              <div className="col storage-action-container">
                <div className="icon-container">
                  <img src={IconDuplicate} alt="icon-duplicate" />
                </div>
                <div className="icon-container">
                  <img src={IconDownload} alt="icon-download" />
                </div>
                <div className="icon-container">
                  <img src={IconGarbage} alt="icon-garbage" />
                </div>
              </div>
            </div>

            <div className="storage-table-data row">
              <div class="form-check col-3 checkbox-container">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label table-data-text"
                  for="flexCheckDefault"
                >
                  document_array-ngs
                </label>
              </div>
              <div className="col access-container">
                <img
                  src={IconEyeOpe}
                  alt="icon-open-eye"
                  style={{ width: "25px", height: "25px" }}
                />
                <select
                  class="form-select select-container"
                  aria-label="Default select example"
                >
                  <option selected>
                    <div>
                      <p>Public</p>
                    </div>
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col">
                <p>6178</p>
              </div>
              <div className="col">
                <p>xls</p>
              </div>
              <div className="col">
                <p>256 MB</p>
              </div>
              <div className="col storage-action-container">
                <div className="icon-container">
                  <img src={IconDuplicate} alt="icon-duplicate" />
                </div>
                <div className="icon-container">
                  <img src={IconDownload} alt="icon-download" />
                </div>
                <div className="icon-container">
                  <img src={IconGarbage} alt="icon-garbage" />
                </div>
              </div>
            </div>

            <div className="storage-table-data row">
              <div class="form-check col-3 checkbox-container">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label table-data-text"
                  for="flexCheckDefault"
                >
                  github_codebase_1002121
                </label>
              </div>
              <div className="col access-container">
                <img
                  src={IconEyeOpe}
                  alt="icon-open-eye"
                  style={{ width: "25px", height: "25px" }}
                />
                <select
                  class="form-select select-container"
                  aria-label="Default select example"
                >
                  <option selected>
                    <div>
                      <p>Public</p>
                    </div>
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col">
                <p>2246</p>
              </div>
              <div className="col">
                <p>github</p>
              </div>
              <div className="col">
                <p>6.3 GB</p>
              </div>
              <div className="col storage-action-container">
                <div className="icon-container">
                  <img src={IconDuplicate} alt="icon-duplicate" />
                </div>
                <div className="icon-container">
                  <img src={IconDownload} alt="icon-download" />
                </div>
                <div className="icon-container">
                  <img src={IconGarbage} alt="icon-garbage" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="storage-four-row">
          <img src={IconLeft} alt="icon-left" className="storage-page-button" />
          <p className="small-text">1</p>
          <img
            src={IconRight}
            alt="icon-right"
            className="storage-page-button"
          />
        </div>

        <div className="storage-five-row">
          <Button text={"Upload"} primary={true} width={"150px"} />
          <span />
          <Button text={"Drafts"} primary={false} width={"150px"} />
        </div>
      </div>
      <div className="storage-detail-container">
        <div className="storage-detail-first-row">
          <p>Selected files:</p>
          <div className="col storage-action-container">
            <div className="icon-container">
              <img src={IconDuplicate} alt="icon-duplicate" />
            </div>
            <div className="icon-container">
              <img src={IconDownload} alt="icon-download" />
            </div>
            <div className="icon-container">
              <img src={IconGarbage} alt="icon-garbage" />
            </div>
          </div>
        </div>
        <div className="storage-detail-second-row">
          <div className="storage-table-header row">
            <div class="form-check col-3 checkbox-container">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                class="form-check-label table-data-text"
                for="flexCheckDefault"
              >
                Name
              </label>
            </div>
            <div className="col">
              <p>ID</p>
            </div>
            <div className="col">
              <p>Artist Name</p>
            </div>
            <div className="col">
              <p>Description</p>
            </div>
            <div className="col">
              <p>Size</p>
            </div>
          </div>
        </div>
        <div className="storage-detail-third-row">
        <div className="storage-detail-table-data row">
              <div class="form-check col-3 checkbox-container">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label table-data-text"
                  for="flexCheckDefault"
                >
                  <Input  width={"100%"} value={'Petals on the Moon'}/>
                </label>
              </div>
              <div className="col access-container">
                <p>6178</p>
              </div>
              <div className="col">
                <Input width={"100%"}  value={'Wasiah Project'}/>
              </div>
              <div className="col">
                <TextArea value={'Gravity is pulling me along and i can’t find a way to understand why i’m here again and again'}/>
              </div>
              <div className="col">
                <p>256 MB</p>
              </div>
              
            </div>
            <div className="storage-detail-table-data row">
              <div class="form-check col-3 checkbox-container">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label table-data-text"
                  for="flexCheckDefault"
                >
                  <Input  width={"100%"} value={'Television Romance'}/>
                </label>
              </div>
              <div className="col access-container">
                <p>33586</p>
              </div>
              <div className="col">
                <Input width={"100%"}  value={'Pale Waves'}/>
              </div>
              <div className="col">
                <TextArea value={'"Television Romance" is a single track by the indie pop band Pale Waves. It was part of their 2018 debut album "My Mind Makes Noises".'}/>
              </div>
              <div className="col">
                <p>256 MB</p>
              </div>
              
            </div>
            <div className="storage-detail-table-data row">
              <div class="form-check col-3 checkbox-container">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label table-data-text"
                  for="flexCheckDefault"
                >
                  <Input  width={"100%"} value={'Self Potrait'}/>
                </label>
              </div>
              <div className="col access-container">
                <p>33586</p>
              </div>
              <div className="col">
                <Input width={"100%"}  value={'Georgette Chen'}/>
              </div>
              <div className="col">
                <TextArea value={"Born in China, Georgette Chen Li Ying (1906-1993)  received her art education in Paris, New York and Shanghai. Chen's artistic oeuvre can be divided into three phases: French Period from 1927-1933; China-Hong Kong Period from 1934-1948 and Penang-Singapore Period from 1949-1980. Immensely inspired by her surroundings, she produced still-lifes, portraits and landscapes from each phase. "}/>
              </div>
              <div className="col">
                <p>256 MB</p>
              </div>
              
            </div>
        </div>

        <div className="storage-detail-four-row">
        <img src={IconLeft} alt="icon-left" className="storage-page-button" />
          <p className="small-text">1</p>
          <img
            src={IconRight}
            alt="icon-right"
            className="storage-page-button"
          />

        </div>

        <div className="storage-detail-five-row">
              <Button primary={false} text={"Upload More"} width={'180px'}/>
              <span/>
              <Button primary={false} text={"Save as draft"} width={'180px'}/>
              <span/>
              <Button primary={true} text={"Publish"} width={'180px'}/>
        </div>
      </div>
    </div>
  );
}

export default Storage;
