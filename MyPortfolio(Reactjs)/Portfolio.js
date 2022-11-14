//Styling
const bodyStyle={paddingTop: '50px', paddingBottom: '350px'}
const projectContentStyle={
    container: {
            backgroundColor: 'rgb(247, 247, 247)',
            border: '1px solid #777',
            borderRadius: '2px',
            height: '80%',
            display: 'flex',
            paddingLeft:'100px',
            flexDirection: 'column',
            justifyContent: 'center'
        }, 
            imageDiv: {
            display: 'flex',
            flexDirection: 'column',
            width: '500px',
            height: '20rem',
        },
            buttons: {
            border: '0',
            margin: '10px',
            backgroundColor: 'silver'
        }
}

function ProjectView(props){
    let styles ={
        bodyStyles: {
            backgroundColor: 'rgb(247, 247, 247)',
            border: '1px solid silver',
            borderRadius: '2px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '5rem'
        },
        videoStyles: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        imageStyles: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px'
        },
        imageStyles2:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px',
            border: '1px solid silver', 
            overflowX: 'croll',
            width: '150%'
        }
    }
    
    return(
        <div style={bodyStyle} id="portfolio">
            <h2 className="text-center">My Work</h2>
            <div className="project-view-container" style={styles.bodyStyles}>
                <h1 className="title">{props.Data.title}</h1><hr style={{width: '400px'}} />
                <div className="video-section" style={styles.videoStyles}>
                    <h4 className="pvideo">Project Video</h4>
                    <video width="620" height="400" controls autoplay muted>
                            <source src={props.Data.video+'.mp4'} type="video/mp4" />
                            <source src={props.Data.video+'.ogg'} type="video/ogg" />
                            Your browser does not support the video tag.
                    </video>
                </div><hr style={{width: '100%'}} />
                <div className="screenshot-section" style={styles.imageStyles}>
                    <h4 className="text-center">Project Screenshots</h4>
                    <div style={styles.imageStyles2}>
                        {
                            (props.Data.Images).map((pimage)=>{
                                return <img style={{height:'520px', width: '80%', margin:'10px'}} src={pimage} alt={props.Data.title} />
                            })
                        }
                    </div> 
                </div>
            </div>
        </div>
    );
}

function viewhandler(){
    viewProject(props.Data);
}


function Project(props){
    return(
        <div>
            <div className="portfolio-container">
            <div className="project-title" style={projectContentStyle.container}>
                <h1 className="text-center">{props.Data.title}</h1>
                <div >
                    <div className="row" style={projectContentStyle.imageDiv}>
                        <img style={projectContentStyle.imageDiv} src={props.Data.Images[0]} alt={props.Data.title} />
                        <p>{props.Data.descrition}</p>
                    </div>
                    <button className="btn btn-seccondary" onClick={viewProject(props.Data)} style={projectContentStyle.buttons}>Open Project</button>
                </div>
            </div>
            </div>
        </div>
    );
}

function ProjectList(){
    const projectData =[ 
        {
            title: 'JS Code Editor Project',
            Images: ['images/Projects/Screenshot 2022-11-02 230434.png', 'images/Projects/Screenshot 2022-11-05 044541.png'],
            descrition: 'Simple java script code Editor project',
            video: 'videos/editor'
        },
        {
            title: 'E-Commerce Web app',
            Images: ['images/Projects/Screenshot-ec.png','images/Projects/Screenshot 2022-11-05 162520.png', 'images/Projects/Screenshot 2022-11-05 162933.png', 'images/Projects/Screenshot 2022-11-05 162714.png', 'images/Projects/Screenshot 2022-11-05 162933.png' ],
            descrition: 'A Full Stack E-Commerce Web app written in JavaScript, mySQL and php',
            video: 'videos/e-commerce'
        },
        {
            title: 'React meet ups app',
            Images: ['images/Projects/React-p.png','images/Projects/Screenshot4.png', 'images/Projects/Screenshot9.png' ],
            descrition: 'Simpple react.js meetups app with database',
            video: 'videos/meetups'
        }
    ];
    return(
        <div>
            {projectData.map((projectData) => {return <Project Data={projectData} /> })}
        </div>
        
    );
}

function Portfolio(){
    return(
        <div style={bodyStyle} id="portfolio">
            <h2 className="text-center">My Work</h2>
            <ProjectList />
        </div>
    );
}