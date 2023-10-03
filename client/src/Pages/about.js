import React from 'react';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Divider from '@mui/material/Divider';
function About() {
  return (
    <section className="container-fluid">
      <div className="cart-heading3 d-flex flex-row gap-4 mb-3">
        <Link to="/" className="cart-text des-text-link">
          Home
        </Link>
        <div className="cart-text">
          <NavigateNextIcon />
        </div>
        <div>
          <span>About</span>
        </div>
      </div>
      <section className="container-fluid">
        <h4 className="contact-h4">About</h4>
        <Divider sx={{ backgroundColor: 'ActiveBorder' }} />
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            aliquam euismod lacinia. Quisque id metus et justo gravida
            imperdiet. Cras in posuere neque. Fusce malesuada vestibulum
            posuere. Curabitur nisi dui, pretium eget convallis nec, placerat at
            nibh. Aenean eu est scelerisque, consectetur odio vitae,
            sollicitudin nibh. Donec imperdiet auctor erat vel porttitor. Sed
            efficitur orci nunc, sed hendrerit tellus imperdiet nec. Sed blandit
            nisi sit amet libero eleifend venenatis. Phasellus auctor vehicula
            mi, in viverra elit porta condimentum. Suspendisse ac ipsum felis.
            Aliquam venenatis porttitor fermentum. Sed posuere, ex malesuada
            pharetra aliquet, sapien libero pharetra risus, sed mollis dui metus
            et lacus. Vestibulum arcu mauris, varius eget lacinia sed, gravida
            tincidunt purus.
          </p>
          <p>
            Cras varius magna tortor, mollis placerat dui bibendum a. Nulla
            malesuada scelerisque enim, vel sagittis massa facilisis in.
            Maecenas efficitur auctor nunc nec posuere. Cras urna lorem,
            porttitor sit amet nibh nec, venenatis semper tortor. Sed sodales
            ullamcorper est, ut laoreet nisi condimentum id. Aenean a justo sed
            justo faucibus pretium vitae sit amet massa. Aenean maximus tellus
            in efficitur auctor. Nullam velit n eque, vulputate at convallis ut,
            varius et enim. Mauris vehicula vulputate ipsum in varius.
            Pellentesque dignissim, eros vel porta posuere, mauris odio
            consequat felis, sit amet rhoncus massa purus at elit. Quisque
            scelerisque porttitor efficitur. Curabitur dignissim viverra
            rhoncus. Cras finibus purus ex, a efficitur mauris malesuada sed.
            Pellentesque dapibus nibh eget metus porttitor, quis molestie purus
            ultrices.
          </p>
          <p>
            Donec eget accumsan nunc. Suspendisse potenti. Nullam molestie
            convallis sem, vel dapibus enim sagittis eget. In vel mi a augue
            facilisis euismod ac a nibh. Sed sodales fermentum mauris. Quisque
            id congue enim. Cras elementum nunc non est tincidunt venenatis.
            Mauris maximus, massa non vulputate ultrices, quam nulla fringilla
            enim, non consequat nisl erat eu lorem. Morbi commodo bibendum magna
            at consectetur. Mauris tempor diam in nunc euismod euismod.
          </p>
        </div>
      </section>
    </section>
  );
}

export default About;
