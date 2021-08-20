import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function FOoter() {
    return (
        <footer className="footer-container">
            <div className="footer-subscription">
                <p className="footer-subscription-heading">
                    Subscribe Form
                </p>
                <form>
                    <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
                />
                </form>
            </div>
            <section className="article-container">
              <div className="article-wrapper">
                <h2>Articles</h2>
                <div className="article-links">
                  <Link to='/' className="article-link-items">- Planet B</Link>
                  <Link to='/'  className="article-link-items">- SAAS Amazon</Link>
                  <Link to='/'  className="article-link-items">- Save Thanos</Link>
                  <Link to='/'  className="article-link-items">- Save Dumna</Link>
                  <Link to='/'  className="article-link-items">- Save Lakshdweep</Link>
                </div>
              </div>
            </section>
            <section className='social-media'>
              <div className='social-media-wrap'>
                <small className='website-rights'>FFF © 2021</small>
                <div className='social-icons'>
                  <Link
                    className='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                  >
                    <i className='fab fa-facebook-f' />
                  </Link>
                  <Link
                    className='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                  >
                    <i className='fab fa-instagram' />
                  </Link>
                  <Link
                    className='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                  >
                    <i className='fab fa-youtube' />
                  </Link>
                  <Link
                    className='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                  >
                    <i className='fab fa-twitter' />
                  </Link>
                  <Link
                    className='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                  >
                    <i className='fab fa-linkedin' />
                  </Link>
                </div>
              </div>
            </section>
        </footer>
    )
}

export default FOoter
