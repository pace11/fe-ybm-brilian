import React, { useEffect } from 'react'
import styled from 'styled-components'
import { image_mitra, nilai_nilai, milestone } from '../../__json__'

const TitleAbout = styled.h2`
  color: #00569c;
  display: inline;
  padding: 0 5px;
  border-radius: 5px;
  span {
    color: #f26624;
  }
`

const TitleVision = styled.h3`
  display: inline;
  position: relative;
  color: #fff;
  &:before {
    background-image: url(${(props) => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    position: absolute;
    bottom: 0;
    right: -30px;
    width: 50px;
    height: 50px;
    z-index: -1;
    opacity: 0.4;
  }
`

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <React.Fragment>
      <div class="container-xxl">
        <div class="container">
          <div class="row align-items-center g-5">
            <div class="col-lg-6 text-center text-lg-start animated slideInRight">
              <TitleAbout>
                Yayasan Baitul Mal <br />
                <span>BRILiaN</span>
              </TitleAbout>
              <p class="mb-4 pb-2 mt-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p>
                Commodo voluptate occaecat sit commodo et cupidatat est dolore
                excepteur. Elit fugiat qui Lorem qui nostrud pariatur proident
                sit proident. Quis ut labore et occaecat esse excepteur
                adipisicing duis eiusmod ea cupidatat laboris occaecat deserunt.
                Nostrud laboris ut ullamco consectetur exercitation. Cupidatat
                pariatur tempor consectetur fugiat esse ut eiusmod consequat do
                enim elit non et. Consectetur esse velit sunt eu voluptate
                officia excepteur esse. Cupidatat amet esse nisi minim enim
                mollit reprehenderit consectetur.
              </p>
            </div>
            <div class="col-lg-6 text-center text-lg-end overflow-hidden animated fadeIn">
              <img
                class="img-fluid"
                src={require('../../assets/image/sumbangan.png').default}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="container-xxl py-5 animated slideInLeft visi-misi-box"
        style={{ backgroundColor: '#F26624' }}
      >
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6">
              <TitleVision
                image={require('../../assets/image/crosshair.svg').default}
              >
                Visi
              </TitleVision>
              <p class="mb-4 pb-2 mt-4 text-light">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
            </div>
            <div class="col-lg-6">
              <TitleVision
                image={require('../../assets/image/rocket.svg').default}
              >
                Misi
              </TitleVision>
              <ul style={{ color: '#fff', margin: '15px 0' }}>
                <li>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </li>
                <li>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </li>
                <li>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </li>
                <li>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-5 animated slideInRight">
        <div class="container">
          {/* <TitleAbout margin="0">
              6 Nilai <span>YBM Brillian</span>
            </TitleAbout> */}
          <div class="row g-5 mt-2">
            {nilai_nilai &&
              nilai_nilai.map((item, idx) => (
                <div
                  class="col-lg-4 col-md-4"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <img src={item.img} alt={`img-nilai-${idx}`} />
                  <h3 style={{ color: '#F26624' }}>{item.title}</h3>
                  <p style={{ margin: 0, padding: 0 }}>{item.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div
        class="container-xxl py-5 animated slideInRight"
        style={{ backgroundColor: '#f2f2f2' }}
      >
        <div class="container">
          <TitleAbout margin="0">
            Milestone <span>YBM Brillian</span>
          </TitleAbout>
          <div class="row g-5 mt-3">
            {milestone &&
              milestone.map((item, idx) => (
                <div
                  key={String(idx)}
                  class="col-lg-3 col-md-3"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${item.url})`,
                      backgroundPosition: 'center right',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      width: '270px',
                      height: '350px',
                      boxShadow: '0px 0px 3px 0px rgb(0 0 0 / 18%)',
                      borderRadius: '5px',
                    }}
                  >
                    <h2 style={{ padding: '10px 10px 0 10px' }}>{item.year}</h2>
                    <p
                      style={{
                        textAlign: 'justify',
                        padding: '0 10px',
                        lineHeight: '1.2',
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div class="container-xxl py-5 animated slideInRight">
        <div class="container">
          <TitleAbout margin="0">
            Mitra <span>YBM Brillian</span>
          </TitleAbout>
          <p class="mb-4 pb-2 mt-4">
            Beberapa mitra yang ikut mendukung dalam upaya dedikasi penyaluran
            zakat, infak, sedekah dan wakaf.
          </p>
          <div class="row g-5">
            {image_mitra &&
              image_mitra.map((item, idx) => (
                <div
                  key={String(idx)}
                  class="col-lg-3 col-md-3"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <img src={item.url} alt={item.alt} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <style>
        {`
          .visi-misi-box {
            position: relative;
          }

          .visi-misi-box::before {
            background-image: url(${
              require('../../assets/image/rocket.svg').default
            });
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            content: '';
            position: absolute;
            bottom: -120px;
            left: 80px;
            width: 350px;
            height: 350px;
            z-index: 1;
            opacity: 0.1;
            transform: rotate(60deg);
          }
        `}
      </style>
    </React.Fragment>
  )
}
