import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';

const kennyimages = require.context('../../src/Assets/pics', true)
const imageList = kennyimages.keys().map(image => kennyimages(image))

export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgFullscreen]}
            >

                {imageList.map((kennyimages, index) => {
                    return (
                        <div className="GalleryListItem-img">
                         <img key={index} src={kennyimages} alt={`kennymercury-${index}`} />
                        </div>
                    )
                })}
            </LightGallery>
        </div>
    );
}
