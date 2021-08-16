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
            <section class='social-media'>
              <div class='social-media-wrap'>
                <small class='website-rights'>FFF © 2021</small>
                <div class='social-icons'>
                  <Link
                    class='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                  >
                    <i class='fab fa-facebook-f' />
                  </Link>
                  <Link
                    class='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                  >
                    <i class='fab fa-instagram' />
                  </Link>
                  <Link
                    class='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                  >
                    <i class='fab fa-youtube' />
                  </Link>
                  <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                  >
                    <i class='fab fa-twitter' />
                  </Link>
                  <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                  >
                    <i class='fab fa-linkedin' />
                  </Link>
                </div>
              </div>
            </section>
        </footer>
    )
}

export default FOoter
