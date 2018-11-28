import Layout from '../components/layout'

import '../assets/styles/style.scss'

const backgroundColor = '#eee'

export default () => (
  <Layout title='Home - Nextbase'>
  <div className='hello'>
    <p>Hello World</p>
    <div className='example'>
      Hello next-sass
    </div>
    <style jsx>{`
      $color: red;
      .hello {
        background-color: ${backgroundColor};
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
        &:hover {
          color: $color;
        }
        @media only screen and (max-width: 480px) {
          font-size: 20px;
        }
      }
    `}</style>
  </div>
  </Layout>
)