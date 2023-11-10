import React from 'react'

import './Dashboard.css'
import Card from './Card'

function Dashboard() {


  const newsContent = (news,date) => {
    return(
      <div className='row'>
      <div className='col-8'>
        <p className='card-primary-text'>{news}</p>
      </div>
      <div className='col-sm-4'>
        <p className='card-black-text'>{date}</p>
      </div>
    </div>
    )
  }

  const storageContent = (name,status,data,source) => {
    return(
    <div className='row'>
      <div className='col'>
          <p className='card-primary-text'>{name}</p>
      </div>
      <div className='col'>
       <div style={{backgroundColor:"#19AF66",borderRadius:'5px', width:'20px',height:"20px"}}></div>
      </div>
      <div className='col'>
        <p className='card-secondary-text'>{data}</p>
      </div>
      <div className='col'>
         <p className='card-secondary-text'>{source}</p>
      </div>
    </div>
    )
  }

  const ReleaseHistoryContent = (title, time) => {
    return(
      <div className='row'>
          <div className='col-8'>
            <p className='card-primary-text'>{title}</p>
          </div>
          <div className='col-4'>
            <p className='card-black-text'>{time}</p>
          </div>
      </div>
    )
  }
  return (
    <div className='dashboard-container'>
      <div className='greeting'>
        <p>Welcome, Jhon Doe</p>
      </div>
      <div className='dashboard-content-container'>
          <Card title={'Storage'} viewall={true} width={'55%'}
            content={
              <div>
                <div className='row'>
                    <div className='col'>
                      <p className='card-header-text'>Name</p>
                    </div>
                    <div className='col'>
                      <p className='card-header-text'>Status</p>
                    </div>
                    <div className='col'>
                      <p className='card-header-text'>Data</p>
                    </div>
                    <div className='col'>
                      <p className='card-header-text'>Source</p>
                    </div>
                </div>
                {storageContent("ngs_artwork",true,"Data_ngs_artwork","docarray")}
                {storageContent("document_array-ngs",true,"file_excel_spreadsheet","xls")}
                {storageContent("github_codebase_100;",true,"pull_github_codebase_","github")}

              </div>
              
            }
          />
          <Card title={'News'} viewall={true} width={"40%"}
          content={
            <div>
              {newsContent("We wll have a Server Maintenance Tommorrow","6 September 2023")}
              {newsContent("How to Improve your workflow with Berlayar.ai","21 August 2023")}
              {newsContent("Introducing Berlayar.ai","14 August 2023")}
            </div>
          }
          />
        </div>
        <div className='dashboard-content-container'>
          <Card title={"Data Usage"} viewall={false} width={"48%"}
            content={
              <div>
                <div className='row'>
                  <div className='col-8'>
                    <p className='card-black-text'>Storage</p>
                  </div>
                  <div className='col-4'>
                    <p className='card-black-text'>8 GB/25 GB</p>
                  </div>
                </div>
                <div style={{width:"100%", height:'20px', background:'#D6D6D8', borderRadius:"20px", display:"flex"}}>
                    <span style={{width:"50%", height:'20px', background:'#0A0A0C', borderRadius:"20px 0px 0px 20px"}}></span>
                    <span style={{width:"20%", height:'20px', background:'#F4444C', borderRadius:"0px"}}></span>
                </div>
              </div>
            }
          />
          <Card title={"Release History"} viewall={true} width={"48%"}
            content={
              <div>
                {ReleaseHistoryContent("ngs_artwork", '6 hours ago')}
                {ReleaseHistoryContent("docuemnt_array-ngs", '18 hours ago')}
                {ReleaseHistoryContent("github_codebase", '3 days ago')}
                
              </div>
            }
            
          />
      </div>
    </div>
  )
}

export default Dashboard