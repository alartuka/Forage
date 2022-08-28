import { Container, Typography } from '@mui/material';
import React from 'react';
import '../style/about.css';

function About() {
  return (
    <section id="about">
      <Container className='about_section'>

        <Typography variant="h1">
          About us
        </Typography>
        <Container className='about_info'>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt lectus in faucibus elementum. Nullam dictum tellus justo, eu vulputate sapien eleifend vel. Nulla auctor purus non sollicitudin viverra. Ut ornare posuere nunc, vitae rhoncus arcu. Cras consequat at mauris a egestas. Praesent sagittis odio turpis, vel dignissim tortor suscipit a. Ut ornare sollicitudin mauris, quis fermentum turpis. Donec vel diam et mi consequat bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            Suspendisse dapibus, libero sed euismod tristique, ligula sapien dapibus leo, tincidunt accumsan nunc mauris quis odio.
            <br /><br />
            Sed feugiat quis erat vel vehicula. Maecenas non dapibus eros. Sed vulputate mollis enim sit amet consequat. Proin vulputate efficitur velit, ac auctor mi mollis id. Morbi a nisl id neque placerat euismod. Phasellus vitae nulla imperdiet, suscipit eros eget, iaculis lectus. Vivamus vitae elit eu est vehicula cursus. Pellentesque et nisl at nibh consequat scelerisque ac eu urna.
            Ut eu eleifend massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis pellentesque nec ligula a vehicula. Suspendisse vitae condimentum sem. Ut pretium dignissim diam, vitae volutpat nunc auctor ac. Nunc placerat, leo commodo pretium elementum, diam nibh dictum mi, ut luctus nisi eros a quam. Phasellus ligula est, tristique vitae ex vitae, sagittis scelerisque lorem. Fusce in urna sem. Phasellus commodo enim in augue tincidunt, rutrum porta dui ultricies. Donec et nibh non nisl sodales ornare ac sed tortor. Etiam non pellentesque orci. Maecenas non felis id velit mollis blandit.
            Donec pretium auctor odio, in imperdiet nunc pellentesque id.
            <br /><br />
            Duis in urna dignissim, tristique est eget, porttitor lacus. Cras at egestas nulla. Nam facilisis urna ipsum, vel rhoncus eros condimentum non. Suspendisse ac nisi auctor, pellentesque metus et, maximus nibh. Phasellus lacus sem, vestibulum ut ex a, cursus ornare libero. Etiam sollicitudin, lorem eu scelerisque interdum, purus nisi dapibus nibh, eget tempus augue purus sollicitudin augue. Donec ipsum arcu, varius ac arcu quis, posuere bibendum ligula. Donec nunc odio, viverra in ornare et, tristique eu risus. Morbi scelerisque mi quis lacus ultrices luctus. Ut imperdiet feugiat urna sed mattis. Duis sollicitudin vitae massa sed aliquet. In a rhoncus neque, nec maximus metus. In gravida feugiat tellus nec ornare. Mauris bibendum scelerisque feugiat.
            Suspendisse id nunc non odio blandit posuere. Nunc in justo lorem. Aliquam molestie, urna non tincidunt hendrerit, odio ligula consectetur ex, vitae efficitur eros eros sit amet felis. Sed dui odio, vulputate id malesuada vel, consequat a arcu. Proin maximus, magna sit amet rhoncus placerat, neque mi faucibus mauris, sit amet lacinia ex est quis quam. Nullam metus augue, laoreet a commodo ultricies, fermentum at neque. Phasellus sollicitudin vestibulum metus. Etiam semper elit metus, in sollicitudin libero posuere vel. Proin aliquam hendrerit purus vel pharetra. Vestibulum at nibh ac purus dictum dapibus. Aliquam vulputate purus eget pellentesque lobortis. In nibh mi, tristique non quam molestie, semper suscipit sem. Morbi leo ligula, tempor eu orci ut, molestie fermentum purus.
          </Typography>
        </Container>
      </Container>
    </section>
  )
}

export default About;