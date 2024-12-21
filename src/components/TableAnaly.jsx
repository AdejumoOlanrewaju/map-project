import React from 'react'

const TableAnaly = () => {
  return (
    <div className="mt-3">
      <table className="table-analy">
        <tr>
          <th>Rank</th>
          <th>Vote</th>
          <th>Risk Title & Description</th>
          <th>Risk Rating</th>
          <th>Up Votes</th>
          <th>Down Votes</th>
        </tr>

        <tr>
          <td className="Rank light-blue bold-p">1.</td>
          <td className="vote light-blue">
            <button className="like-cta flex-column align-center gp-10">
              <span className="flex-center">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 -0.5 21 21"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>like [#1385]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-259.000000, -760.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M203,620 L207.200006,620 L207.200006,608 L203,608 L203,620 Z M223.924431,611.355 L222.100579,617.89 C221.799228,619.131 220.638976,620 219.302324,620 L209.300009,620 L209.300009,608.021 L211.104962,601.825 C211.274012,600.775 212.223214,600 213.339366,600 C214.587817,600 215.600019,600.964 215.600019,602.153 L215.600019,608 L221.126177,608 C222.97313,608 224.340232,609.641 223.924431,611.355 L223.924431,611.355 Z"
                          id="like-[#1385]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>

              <span className="vote-cta-name">Up votes</span>
            </button>

            <button className="dislike-cta flex-column align-center gp-10 mt-2">
              <span className="flex-center">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 -0.5 21 21"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>dislike [#1388]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-139.000000, -760.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M101.900089,600 L99.8000892,600 L99.8000892,611.987622 L101.900089,611.987622 C103.060339,611.987622 104.000088,611.093545 104.000088,609.989685 L104.000088,601.997937 C104.000088,600.894077 103.060339,600 101.900089,600 M87.6977917,600 L97.7000896,600 L97.7000896,611.987622 L95.89514,618.176232 C95.6819901,619.491874 94.2455904,620.374962 92.7902907,619.842512 C91.9198408,619.52484 91.400091,618.66273 91.400091,617.774647 L91.400091,612.986591 C91.400091,612.43516 90.9296911,611.987622 90.3500912,611.987622 L85.8728921,611.987622 C84.0259425,611.987622 82.6598928,610.35331 83.0746427,608.641078 L84.8995423,602.117813 C85.1998423,600.878093 86.360092,600 87.6977917,600"
                          id="dislike-[#1388]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="vote-cta-name">Down Votes</span>
            </button>
          </td>
          <td className="risk-title">
            <h5>
              <span className="bold-p">Risk Title</span> Ipsum dolor sit amet,
              consecteur adpiscing Nunc vulpulate
              <span className="more-cta-span mac-lighter-text">...more</span>
            </h5>
            <span className="mac-lighter-text view-comments-cta">
              View all comments
            </span>
          </td>
          <td className="risk-rating brown-clr">
            <span className="risk-rating-val fs-20">99%</span>
          </td>
          <td className="upvote-val fs-20 light-blue">9999</td>
          <td className="downvote-val fs-20 light-blue">32</td>
        </tr>

        <tr>
          <td className="Rank light-blue bold-p">2.</td>
          <td className="vote light-blue">
            <button className="like-cta flex-column align-center gp-10">
              <span className="flex-center">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 -0.5 21 21"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>like [#1385]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-259.000000, -760.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M203,620 L207.200006,620 L207.200006,608 L203,608 L203,620 Z M223.924431,611.355 L222.100579,617.89 C221.799228,619.131 220.638976,620 219.302324,620 L209.300009,620 L209.300009,608.021 L211.104962,601.825 C211.274012,600.775 212.223214,600 213.339366,600 C214.587817,600 215.600019,600.964 215.600019,602.153 L215.600019,608 L221.126177,608 C222.97313,608 224.340232,609.641 223.924431,611.355 L223.924431,611.355 Z"
                          id="like-[#1385]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>

              <span className="vote-cta-name">Up votes</span>
            </button>

            <button className="dislike-cta flex-column align-center gp-10 mt-2">
              <span className="flex-center">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 -0.5 21 21"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>dislike [#1388]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-139.000000, -760.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M101.900089,600 L99.8000892,600 L99.8000892,611.987622 L101.900089,611.987622 C103.060339,611.987622 104.000088,611.093545 104.000088,609.989685 L104.000088,601.997937 C104.000088,600.894077 103.060339,600 101.900089,600 M87.6977917,600 L97.7000896,600 L97.7000896,611.987622 L95.89514,618.176232 C95.6819901,619.491874 94.2455904,620.374962 92.7902907,619.842512 C91.9198408,619.52484 91.400091,618.66273 91.400091,617.774647 L91.400091,612.986591 C91.400091,612.43516 90.9296911,611.987622 90.3500912,611.987622 L85.8728921,611.987622 C84.0259425,611.987622 82.6598928,610.35331 83.0746427,608.641078 L84.8995423,602.117813 C85.1998423,600.878093 86.360092,600 87.6977917,600"
                          id="dislike-[#1388]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="vote-cta-name">Down Votes</span>
            </button>
          </td>
          <td className="risk-title">
            <h5>
              <span className="bold-p">Risk Title</span> Ipsum dolor sit amet,
              consecteur adpiscing Nunc vulpulate
              <span className="more-cta-span mac-lighter-text">...more</span>
            </h5>
            <span className="mac-lighter-text view-comments-cta">
              View all comments
            </span>
          </td>
          <td className="risk-rating red-clr">
            <span className="risk-rating-val fs-20">88%</span>
          </td>
          <td className="upvote-val fs-20 light-blue">8888</td>
          <td className="downvote-val fs-20 light-blue">54</td>
        </tr>

        <tr>
          <td className="Rank light-blue bold-p">3.</td>
          <td className="vote light-blue">
            <button className="like-cta flex-column align-center gp-10">
              <span className="flex-center">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 -0.5 21 21"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>like [#1385]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-259.000000, -760.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M203,620 L207.200006,620 L207.200006,608 L203,608 L203,620 Z M223.924431,611.355 L222.100579,617.89 C221.799228,619.131 220.638976,620 219.302324,620 L209.300009,620 L209.300009,608.021 L211.104962,601.825 C211.274012,600.775 212.223214,600 213.339366,600 C214.587817,600 215.600019,600.964 215.600019,602.153 L215.600019,608 L221.126177,608 C222.97313,608 224.340232,609.641 223.924431,611.355 L223.924431,611.355 Z"
                          id="like-[#1385]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>

              <span className="vote-cta-name">Up votes</span>
            </button>

            <button className="dislike-cta flex-column align-center gp-10 mt-2">
              <span className="flex-center">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 -0.5 21 21"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>dislike [#1388]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-139.000000, -760.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M101.900089,600 L99.8000892,600 L99.8000892,611.987622 L101.900089,611.987622 C103.060339,611.987622 104.000088,611.093545 104.000088,609.989685 L104.000088,601.997937 C104.000088,600.894077 103.060339,600 101.900089,600 M87.6977917,600 L97.7000896,600 L97.7000896,611.987622 L95.89514,618.176232 C95.6819901,619.491874 94.2455904,620.374962 92.7902907,619.842512 C91.9198408,619.52484 91.400091,618.66273 91.400091,617.774647 L91.400091,612.986591 C91.400091,612.43516 90.9296911,611.987622 90.3500912,611.987622 L85.8728921,611.987622 C84.0259425,611.987622 82.6598928,610.35331 83.0746427,608.641078 L84.8995423,602.117813 C85.1998423,600.878093 86.360092,600 87.6977917,600"
                          id="dislike-[#1388]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="vote-cta-name">Down Votes</span>
            </button>
          </td>
          <td className="risk-title">
            <h5>
              <span className="bold-p">Risk Title</span> Ipsum dolor sit amet,
              consecteur adpiscing Nunc vulpulate
              <span className="more-cta-span mac-lighter-text">...more</span>
            </h5>
            <span className="mac-lighter-text view-comments-cta">
              View all comments
            </span>
          </td>
          <td className="risk-rating dark-yellow-clr">
            <span className="risk-rating-val fs-20">77%</span>
          </td>
          <td className="upvote-val fs-20 light-blue">7777</td>
          <td className="downvote-val fs-20 light-blue">23</td>
        </tr>

        <tr>
          <td className="Rank light-blue bold-p">4.</td>
          <td className="vote light-blue">
            <button className="like-cta flex-column align-center gp-10">
              <span className="flex-center">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 -0.5 21 21"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>like [#1385]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-259.000000, -760.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M203,620 L207.200006,620 L207.200006,608 L203,608 L203,620 Z M223.924431,611.355 L222.100579,617.89 C221.799228,619.131 220.638976,620 219.302324,620 L209.300009,620 L209.300009,608.021 L211.104962,601.825 C211.274012,600.775 212.223214,600 213.339366,600 C214.587817,600 215.600019,600.964 215.600019,602.153 L215.600019,608 L221.126177,608 C222.97313,608 224.340232,609.641 223.924431,611.355 L223.924431,611.355 Z"
                          id="like-[#1385]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>

              <span className="vote-cta-name">Up votes</span>
            </button>

            <button className="dislike-cta flex-column align-center gp-10 mt-2">
              <span className="flex-center">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 -0.5 21 21"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>dislike [#1388]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-139.000000, -760.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M101.900089,600 L99.8000892,600 L99.8000892,611.987622 L101.900089,611.987622 C103.060339,611.987622 104.000088,611.093545 104.000088,609.989685 L104.000088,601.997937 C104.000088,600.894077 103.060339,600 101.900089,600 M87.6977917,600 L97.7000896,600 L97.7000896,611.987622 L95.89514,618.176232 C95.6819901,619.491874 94.2455904,620.374962 92.7902907,619.842512 C91.9198408,619.52484 91.400091,618.66273 91.400091,617.774647 L91.400091,612.986591 C91.400091,612.43516 90.9296911,611.987622 90.3500912,611.987622 L85.8728921,611.987622 C84.0259425,611.987622 82.6598928,610.35331 83.0746427,608.641078 L84.8995423,602.117813 C85.1998423,600.878093 86.360092,600 87.6977917,600"
                          id="dislike-[#1388]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="vote-cta-name">Down Votes</span>
            </button>
          </td>
          <td className="risk-title">
            <h5>
              <span className="bold-p">Risk Title</span> Ipsum dolor sit amet,
              consecteur adpiscing Nunc vulpulate
              <span className="more-cta-span mac-lighter-text">...more</span>
            </h5>
            <span className="mac-lighter-text view-comments-cta">
              View all comments
            </span>
          </td>
          <td className="risk-rating mid-yellow-clr">
            <span className="risk-rating-val fs-20">66%</span>
          </td>
          <td className="upvote-val fs-20 light-blue">6666</td>
          <td className="downvote-val fs-20 light-blue">30</td>
        </tr>

        <tr>
          <td className="Rank light-blue bold-p">5.</td>
          <td className="vote light-blue">
            <button className="like-cta flex-column align-center gp-10">
              <span className="flex-center">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 -0.5 21 21"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>like [#1385]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-259.000000, -760.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M203,620 L207.200006,620 L207.200006,608 L203,608 L203,620 Z M223.924431,611.355 L222.100579,617.89 C221.799228,619.131 220.638976,620 219.302324,620 L209.300009,620 L209.300009,608.021 L211.104962,601.825 C211.274012,600.775 212.223214,600 213.339366,600 C214.587817,600 215.600019,600.964 215.600019,602.153 L215.600019,608 L221.126177,608 C222.97313,608 224.340232,609.641 223.924431,611.355 L223.924431,611.355 Z"
                          id="like-[#1385]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>

              <span className="vote-cta-name">Up votes</span>
            </button>

            <button className="dislike-cta flex-column align-center gp-10 mt-2">
              <span className="flex-center">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 -0.5 21 21"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>dislike [#1388]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-139.000000, -760.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M101.900089,600 L99.8000892,600 L99.8000892,611.987622 L101.900089,611.987622 C103.060339,611.987622 104.000088,611.093545 104.000088,609.989685 L104.000088,601.997937 C104.000088,600.894077 103.060339,600 101.900089,600 M87.6977917,600 L97.7000896,600 L97.7000896,611.987622 L95.89514,618.176232 C95.6819901,619.491874 94.2455904,620.374962 92.7902907,619.842512 C91.9198408,619.52484 91.400091,618.66273 91.400091,617.774647 L91.400091,612.986591 C91.400091,612.43516 90.9296911,611.987622 90.3500912,611.987622 L85.8728921,611.987622 C84.0259425,611.987622 82.6598928,610.35331 83.0746427,608.641078 L84.8995423,602.117813 C85.1998423,600.878093 86.360092,600 87.6977917,600"
                          id="dislike-[#1388]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="vote-cta-name">Down Votes</span>
            </button>
          </td>
          <td className="risk-title">
            <h5>
              <span className="bold-p">Risk Title</span> Ipsum dolor sit amet,
              consecteur adpiscing Nunc vulpulate
              <span className="more-cta-span mac-lighter-text">...more</span>
            </h5>
            <span className="mac-lighter-text view-comments-cta">
              View all comments
            </span>
          </td>
          <td className="risk-rating mid-green-clr">
            <span className="risk-rating-val fs-20">55%</span>
          </td>
          <td className="upvote-val fs-20 light-blue">5555</td>
          <td className="downvote-val fs-20 light-blue">15</td>
        </tr>
      </table>
    </div>
  );
}

export default TableAnaly