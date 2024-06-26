import { Navbar, Typography, Button, Input } from '@material-tailwind/react';

export function DashHeader() {
  return (
    <>
      <Navbar className="mx-auto max-w-screen-2xl bg-[#1cacb1] text-white px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-y-4 ">
          <Typography as="a" href="#" variant="h6" className="mr-4 ml-2 cursor-pointer py-1.5">
            Visit Los Angeles dashboard
          </Typography>

          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: 'min-w-[288px]'
              }}
            />
            <Button size="sm" color="white" className="!absolute right-1 top-1 rounded">
              Search
            </Button>
          </div>
        </div>
      </Navbar>
    </>
  );
}
