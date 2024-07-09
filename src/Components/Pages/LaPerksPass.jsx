/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import img1 from '../../assets/image/perkspass_0.webp';
import Container from '../Shared/Container';
import {
  Button,
  Card,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const heroImg = [
  {
    mainImg: [{ src: img1 }, { src: img1 }]
  },
  {
    passKey: [
      {
        src: img1,
        list: [
          'Mobile exclusive',
          'Instantly delivered via text and email',
          'No apps to download',
          'Save on the best of Los Angeles'
        ]
      }
    ]
  },
  {
    howPassWork: {
      step: [
        {
          stepNum: 'GET YOUR PASS',
          src: img1,
          details:
            'This mobile exclusive passport is a collection of curated attractions, retailers, restaurants, and more offering deals and discounts to redeem during your visit.'
        },
        {
          stepNum: 'RECEIVE TEXT',
          src: img1,
          details:
            'Your passport will be instantly delivered to your phone via text and email and is ready to use immediately! There is no app to download. Your pass can be saved to your phone’s home screen for easy one-tap access.'
        },
        {
          stepNum: 'REDEEM',
          src: img1,
          details:
            'When visiting a participating business, simply present your phone to the attendant or staff member to redeem available discounts.'
        }
      ]
    }
  },
  {
    VenuDetails: [
      {
        title: 'LA Perks Pass'
      },
      {
        expirationDate: '29th February 2025'
      },
      {
        description:
          'Elevate your Los Angeles experience like never before! The LA Perks Pass is your gateway to an extraordinary journey through the heart of LA. Unlock special offers to savor dynamic dining at world-class restaurants, discover hidden gems while shopping in style, indulge in thrilling “only-in-LA” activities, and immerse yourself in the vibrant entertainment scene – all by showing your LA Perks Pass mobile passport.'
      },
      {
        includeVenuMapLink: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29707.11984602624!2d91.9994368!3d21.4532096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1720519462171!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        )
      },
      {
        hotelDetails: [
          { hotelImg: img1 },
          { offerName: 'A3 Visual (a AAA Flag & Banner company)' },
          { websiteLink: 'https://www.discoverlosangeles.com/laperkspass' },
          {
            details:
              'As a single source partner, we help our clients solve marketing challenges with a wide range of services, including but not limited to design, event production services, large-format printing, immersive experiences, fabrication, and in-house installation crews trained, certified, and insured for on-site support - anywhere in the country.'
          },
          {
            included: '100% Off Immersive Consultation'
          }
        ]
      },
      {
        hotelDetails: [
          { hotelImg: img1 },
          { offerName: 'A3 Visual (a AAA Flag & Banner company)' },
          { websiteLink: 'https://www.discoverlosangeles.com/laperkspass' },
          {
            details:
              'As a single source partner, we help our clients solve marketing challenges with a wide range of services, including but not limited to design, event production services, large-format printing, immersive experiences, fabrication, and in-house installation crews trained, certified, and insured for on-site support - anywhere in the country.'
          },
          {
            included: '100% Off Immersive Consultation'
          }
        ]
      },
      {
        hotelDetails: [
          { hotelImg: img1 },
          { offerName: 'A3 Visual (a AAA Flag & Banner company)' },
          { websiteLink: 'https://www.discoverlosangeles.com/laperkspass' },
          {
            details:
              'As a single source partner, we help our clients solve marketing challenges with a wide range of services, including but not limited to design, event production services, large-format printing, immersive experiences, fabrication, and in-house installation crews trained, certified, and insured for on-site support - anywhere in the country.'
          },
          {
            included: '100% Off Immersive Consultation'
          }
        ]
      },
      {
        hotelDetails: [
          { hotelImg: img1 },
          { offerName: 'A3 Visual (a AAA Flag & Banner company)' },
          { websiteLink: 'https://www.discoverlosangeles.com/laperkspass' },
          {
            details:
              'As a single source partner, we help our clients solve marketing challenges with a wide range of services, including but not limited to design, event production services, large-format printing, immersive experiences, fabrication, and in-house installation crews trained, certified, and insured for on-site support - anywhere in the country.'
          },
          {
            included: '100% Off Immersive Consultation'
          }
        ]
      }
    ]
  }
];

const LaPerksPass = () => {
  const lastMainImg = heroImg[0].mainImg[heroImg[0].mainImg.length - 1];
  const passKey = heroImg[1].passKey[0];
  const howPassWorkSteps = heroImg[2].howPassWork.step;
  const venuDetails = heroImg[3].VenuDetails;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <Container className="">
        <div className="relative h-96">
          <img src={lastMainImg.src} className="w-full h-full object-cover" alt="Hero Image" />
        </div>
        <div className="w-full max-w-3xl mx-auto flex justify-center items-center py-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to La Perks Pass</h1>
        </div>
        <div className="mx-auto">
          <Card className="w-full max-w-md mx-auto">
            <Card.Body>
              <div className="flex flex-col gap-4 mb-4">
                <img src={passKey.src} className="w-full h-40 object-cover mr-2" alt="Icon" />
                <ul className="list-disc list-inside">
                  <h1>LA PERKS PASS</h1>
                  {passKey.list.map((item, index) => (
                    <li key={index} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4">
                <Button>Signup</Button>
                <Button onClick={handleOpen} variant="gradient">
                  Learn more
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Dialog
            open={open}
            handler={handleOpen}
            className="h-screen overflow-scroll customScrollBar"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 }
            }}>
            <DialogHeader>LA Perks Pass Details</DialogHeader>
            <DialogBody>
              {venuDetails.map((detail, index) => (
                <div key={index} className="mb-4">
                  {detail.title && <h1>{detail.title}</h1>}
                  {detail.expirationDate && <p>Expiration Date: {detail.expirationDate}</p>}
                  {detail.description && <p className="my-2">{detail.description}</p>}
                  {detail.includeVenuMapLink && (
                    <div className="my-4">{detail.includeVenuMapLink}</div>
                  )}
                  {detail.hotelDetails && (
                    <div className="my-4">
                      <img
                        src={detail.hotelDetails[0].hotelImg}
                        alt="Hotel"
                        className="w-full h-auto"
                      />
                      <h1>{detail.hotelDetails[1].offerName}</h1>
                      <Link
                        to={detail.hotelDetails[2].websiteLink}
                        className="text-blue-600 hover:underline">
                        Website Link
                      </Link>

                      <div className="">
                        <p className="my-2">{detail.hotelDetails[3].details}</p>
                      </div>
                      <div className="">
                        <h1>What's Included</h1>
                        <li className="font-semibold">{detail.hotelDetails[4].included}</li>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </DialogBody>
            <DialogFooter>
              <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
                <span>Close</span>
              </Button>
            </DialogFooter>
          </Dialog>
        </div>
        <div className=" w-full max-w-2xl mx-auto p-4">
          <h1 className="my-4 lg:text-2xl font-semibold">HOW THIS PASS WORKS</h1>{' '}
          {/* Display howPassWork steps and details */}
          <div className="lg:flex block gap-4">
            {howPassWorkSteps.map((step, index) => (
              <div key={index} className="mb-4">
                <div className="flex mb-2">
                  <h3 className="font-semibold">
                    {index + 1}. {step.stepNum}
                  </h3>
                </div>
                <div className="flex">
                  <p className="text-gray-700 text-justify">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LaPerksPass;
