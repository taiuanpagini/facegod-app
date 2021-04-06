import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import { IIcon } from './interface';

const User: React.FC<IIcon> = ({ color }) => {
  const svg = `
    <svg id="Capa_1" enable-background="new 0 0 512 512" height="28" viewBox="0 0 512 512" width="28" xmlns="http://www.w3.org/2000/svg">
      <g><g><path d="m456.969 407.139c27.744-39.712 44.031-88.02 44.031-140.139 0-135.31-109.69-245-245-245s-245 109.69-245 245c0 52.119 16.287 100.427 44.031 140.139z" fill="#ff4155"/></g><g><circle cx="256" cy="222" fill="#e80054" r="180"/></g><g><path d="m304.173 21.276v3.873s-6.311-10.215-23.234-17.946c-3.092-1.412-6.647.885-6.232 4.055l1.34 10.223s-5.066-12.977-17.683-20.819c-1.422-.884-3.306-.884-4.728 0-12.618 7.842-17.683 20.819-17.683 20.819l1.34-10.223c.415-3.17-3.14-5.468-6.232-4.055-16.923 7.731-23.234 17.946-23.234 17.946v-3.873c0-2.886-3.204-4.841-6.05-3.665-17.065 7.053-63.376 35.245-48.059 130.094h204.562c15.317-94.849-30.994-123.041-48.059-130.094-2.844-1.176-6.048.778-6.048 3.665z" fill="#6c5475"/></g><g><path d="m204.574 59.904s-5.447-21.329 3.253-34.755v-3.873c0-2.886-3.204-4.841-6.05-3.665-17.065 7.053-63.376 35.245-48.059 130.094h50.856z" fill="#543e5b"/></g><g><path d="m113.683 466.422h284.634c22.751-16.273 42.604-36.341 58.632-59.283-9.22-25.363-19.04-47.328-27.391-54.702-23.413-20.673-123.588-37.434-126.172-37.863h-94.772c-2.584.428-102.759 17.19-126.172 37.863-8.351 7.373-18.17 29.339-27.391 54.702 16.027 22.942 35.881 43.01 58.632 59.283z" fill="#fff"/></g><g><path d="m113.683 466.422h251.986c-74.376 0-134.669-60.293-134.669-134.669v-17.178h-22.386c-2.584.428-102.759 17.19-126.172 37.863-8.351 7.373-18.17 29.339-27.391 54.702 16.027 22.941 35.881 43.009 58.632 59.282z" fill="#deeeff"/></g><g><path d="m91.07 426.843v21.327c7.157 6.519 14.704 12.617 22.599 18.262l-12.035-41.103c-1.75-5.98-10.564-4.716-10.564 1.514z" fill="#d3dcfb"/></g><g><path d="m420.93 426.843v21.327c-7.157 6.519-14.704 12.617-22.599 18.262l12.035-41.103c1.75-5.98 10.564-4.716 10.564 1.514z" fill="#deeeff"/></g><g><path d="m318.291 317.265c-8.654-1.646-14.316-2.593-14.905-2.69h-94.772c-.587.097-6.224 1.04-14.843 2.679 1.996 2.662 25.125 32.414 62.013 32.414 37.264 0 60.899-30.284 62.507-32.403z" fill="#d3dcfb"/></g><g><path d="m303.386 220.734h-94.772v93.841s19.021 20.093 47.17 20.093 47.602-20.093 47.602-20.093z" fill="#f9a373"/></g><g><path d="m208.614 220.734v93.841c94.723 0 94.772-53.4 94.772-53.4v-40.44h-94.772z" fill="#ef8e5e"/></g><g><path d="m180.942 159.567s-10.385-25.285-28.897-19.415.448 60.664 36.573 64.116z" fill="#ef8e5e"/></g><g><path d="m331.058 159.567s10.385-25.285 28.897-19.415-.448 60.664-36.573 64.116z" fill="#f9a373"/></g><g><path d="m178.554 93.468c-6.477 15.529-10.151 33.558-10.151 53.287 0 64.505 39.219 140.155 87.597 140.155s87.597-75.651 87.597-140.155c0-19.729-3.674-37.757-10.151-53.287z" fill="#fbb989"/></g><g><path d="m208.403 146.754c0-19.733 3.686-37.755 10.166-53.287h-40.015c-6.477 15.529-10.151 33.558-10.151 53.287 0 64.505 39.219 140.155 87.597 140.155 6.881 0 13.576-1.535 20-4.346-38.741-16.952-67.597-80.479-67.597-135.809z" fill="#f9a373"/></g><g><path d="m310.999 162.085c.043-3.495-1.371-7.004-4.242-9.539-4.675-4.128-11.84-4.128-16.515 0-2.871 2.535-4.284 6.044-4.242 9.539.055 4.538 5.629 6.716 8.838 3.507 2.022-2.022 5.3-2.022 7.322 0 3.21 3.21 8.784 1.032 8.839-3.507z" fill="#543e5b"/></g><g><path d="m201.001 162.085c-.043-3.495 1.371-7.004 4.242-9.539 4.675-4.128 11.84-4.128 16.515 0 2.871 2.535 4.284 6.044 4.242 9.539-.055 4.538-5.629 6.716-8.838 3.507-2.022-2.022-5.3-2.022-7.322 0-3.21 3.21-8.784 1.032-8.839-3.507z" fill="#543e5b"/></g><g><g><path d="m242.013 192.447 8.436-13.441c2.569-4.093 8.533-4.093 11.102 0l8.436 13.441c2.739 4.365-.398 10.038-5.551 10.038h-16.871c-5.154-.001-8.291-5.674-5.552-10.038z" fill="#f9a373"/></g></g><g><g><path d="m235.384 240.87h41.233c4.111-3.622 7.258-8.309 9.01-13.631 1.584-4.811-2.069-9.754-7.134-9.754h-44.985c-5.065 0-8.718 4.943-7.134 9.754 1.752 5.322 4.899 10.009 9.01 13.631z" fill="#543e5b"/></g><g><path d="m276.616 240.87c-5.493 4.849-12.714 7.798-20.616 7.798s-15.124-2.948-20.616-7.798c5.5-4.849 12.714-7.798 20.616-7.798s15.116 2.949 20.616 7.798z" fill="#ff4155"/></g></g><g><path d="m354.253 413.972-.082-.181c-3.23-7.176-10.368-11.791-18.238-11.791h-159.867c-7.869 0-15.007 4.615-18.238 11.791l-.082.181c-9.553 21.223-24.807 39.38-44.064 52.45 40.112 28.69 89.236 45.578 142.318 45.578s102.206-16.888 142.317-45.578c-19.257-13.07-34.511-31.227-44.064-52.45z" fill="#ccde3d"/></g><g><path d="m256 512c53.082 0 102.206-16.888 142.317-45.578h-32.649c-48.633 0-91.241-25.782-114.912-64.422h-74.69c-7.869 0-15.007 4.615-18.238 11.791l-.082.181c-9.553 21.223-24.807 39.38-44.064 52.45 40.112 28.69 89.236 45.578 142.318 45.578z" fill="#afc728"/></g><g><path d="m192.34 434.575c8.988 0 16.274-7.286 16.274-16.274v-113.726c-.786.13-10.591 1.77-24.518 4.571-4.668.939-8.03 5.043-8.03 9.805v99.351c0 8.987 7.286 16.273 16.274 16.273z" fill="#91af12"/></g><g><path d="m192.34 374.575c-8.988 0-16.274-7.286-16.274-16.274v60c0 8.988 7.286 16.274 16.274 16.274 8.988 0 16.274-7.286 16.274-16.274v-60c0 8.988-7.286 16.274-16.274 16.274z" fill="#76930a"/></g><g><path d="m319.66 434.575c-8.988 0-16.274-7.286-16.274-16.274v-113.726c.786.13 10.591 1.77 24.518 4.571 4.668.939 8.03 5.043 8.03 9.805v99.351c0 8.987-7.286 16.273-16.274 16.273z" fill="#91af12"/></g><g><path d="m278.5 466.422h-45c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5h45c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5z" fill="#76930a"/></g><g><path d="m319.66 374.575c-8.988 0-16.274-7.286-16.274-16.274v60c0 8.988 7.286 16.274 16.274 16.274 8.988 0 16.274-7.286 16.274-16.274v-60c0 8.988-7.286 16.274-16.274 16.274z" fill="#76930a"/></g><g><path d="m145.736 109.012c-.381-9.589-.225-24.549 2.722-40.934.853-4.742 5.018-8.175 9.836-8.175h195.411c4.818 0 8.983 3.433 9.836 8.175 2.948 16.384 3.103 31.345 2.722 40.934-.242 6.087-5.244 10.891-11.335 10.891h-197.856c-6.092.001-11.094-4.804-11.336-10.891z" fill="#afc728"/></g><g><path d="m148.459 68.079c-2.948 16.385-3.103 31.345-2.722 40.934.242 6.087 5.244 10.891 11.335 10.891h98.928v-26.436c-43.414-5.631-51.426-33.564-51.426-33.564h-46.28c-4.817 0-8.982 3.433-9.835 8.175z" fill="#91af12"/></g><g><path d="m350.113 119.904s-41.057-26.436-94.113-26.436-94.113 26.436-94.113 26.436 7.007 42.926 27.313 42.926 22.26-34.681 66.801-34.681 46.495 34.681 66.801 34.681c20.304 0 27.311-42.926 27.311-42.926z" fill="#ccde3d"/></g><g><path d="m238.659 110.808c0-9.577 7.764-17.341 17.341-17.341-53.056 0-94.113 26.436-94.113 26.436s7.007 42.926 27.313 42.926 22.26-34.681 66.801-34.681c-9.578.001-17.342-7.763-17.342-17.34z" fill="#afc728"/></g></g>
    </svg>
  `;

  return <SvgCss fill={color} xml={svg} />;
};
export default User;