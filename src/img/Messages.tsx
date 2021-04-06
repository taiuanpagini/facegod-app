import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import { IIcon } from './interface';

const House: React.FC<IIcon> = ({ color }) => {
  const svg = `
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="23" height="23" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0" transform="scale(0.0104167)"/>
    </pattern>
    <image id="image0" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAE2ElEQVR4nO2dS4gdRRSGTydBE4kjJFEwBhV8gREVFdz4gPhAQYSAWWnGjWQTMQsVyS6YjaAuFESiCBIhG1fBBDGCbgRHUEExIAYfBAxuNKIRHXTyuegb5s4wt6uqT1V3Vd/zravq/FU/99yav28zIoZhGIZhGIZhGIYaYDOwB3irby1TA7AO2AG8B/xLzdN96xo0wCrgDuAA8AdLWQAu61vjIAG2AvuAH5nMB33rHBRjff3zhkMf57G+NRfPhL7uwxlgfd/6i4Tmvu7Lwb73URz49XVf7ut7P0VAeF/34Wdgta+GNSk3mCPAOhF5SERmReQBiX8Gh6qqWoi8ZtkQp6/7cmOItirVpnMA2CoiO0TkcRG5soOSx6uquiFkwuBaELBZ6kPfKSK3dlz+7dAJg/gEUN+5t0t96NtExPtL0JM5EZkXkbsbxiyIyOVVVZ2KXDtPOujrJ4EXgGtH9T5zjJ+O6IG49/Xl/A4cBO4FqrGa1wBnHXOHGz2Q5r5+jv+AD4FZ4IIJ9fc71hhe9ED7HMaX48BzwCUOHRXwvWOtYUQPLO3rfyY49CV93VPTnR7rlh09sNjXf0pw6Cv29QBtbzjWD4oesoHFvv5FgkN39nVPjWuB045aL8Y8l6SQSV8P0PuIR82g6KFzyLCvB2g/7Kj9Teya0SDjvu6pfwMw79DxTIraraGAvh6wlycdehaALal1+AhdPzqUY6NDis2nwG5gY0TNq4ENjjFzDl3HYukJhrL7+sXAXhqujvhFDztja3NC+X39LuBL4FLHuHyiBwbQ16njhD3AP8A9HmPziR6AVxMcfPS+3qB/I3BkVHevx3if6OH+1LrHBVWRTEjW1xu03wb8MKp/FFjlMSe/6EFhQvK+3qB5F4v3+JPAJo85+UYPIxNeCzj874CZHnTOAO+O6ZgHbvec6xM93JR6D00CQz8J7wNrO9R3M3BimYanAubnHz3kagL1TeqvZbUP49n6KCl6yMkE6oT1zRVqngAuClhnt2MPeUQP58jBBOA64OsVav0N3BK4Vr7RwyT6NAF4lMkxyBOBa+UZPfjQtQnA+cArDesfarFmPtFDG7oyAbiC5lbxLXBhC+2u6OGdUK2dk9oE4GHgt4b1zgDXt9CdV/SgIYUJwBrqCMPVo2dbas4vetAQ0wRgC/CJxxqvt9Sab/SgIYYJwDbgF4+5X1G/9dJGZ/m/ephEWxOoHxfuo/7Dx8Vp4CqFxvyjBw2EB3hHgY88x54Ftiu0bcIdPTwb8zx6gXjPE5bzslJXWdGDhgQmzAHnKTWVFz1oiGjCr4DqhTvgakqNHjREMGEBeDCCjucddfKOHjQoTdgfqX750YOGliZ8TIS/SBlS9KCB8CvqEZRfvKO6Bxx1TsUwugjoPsoeZvSgoUsTGHL0oKErExh69KAhtQmU9KuHvkhpAtMUPWhIZQLTFj1oiG0C0xo9aIhpAtMcPWiIYQIWPejQmkD9LpuL4UcPGjQmYNFDHFqaMEP9/KCJl/reWzHQ7iURF/29cFEixH28Ob3Rg4aIJkx39KAhggkWPWhRmmDRQwwUJlj0EIsWJlj0EJtAEyx6SEGACRY9pMLDBIseUuMwwaKHLmgwwaKHrljBBIseumaZCeW/cFEiYybYP9c0DMMwDMMwDKN3/gdimi89AWZeUgAAAABJRU5ErkJggg=="/>
    </defs>
    </svg>  
  `;

  return <SvgCss fill={color} xml={svg} />;
};

export default House;
