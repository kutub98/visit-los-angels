/* eslint-disable react/react-in-jsx-scope */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button
} from '@material-tailwind/react';

const Login = () => {
  return (
    <div className="w-full mx-auto p-10">
      <Card className="w-96 mx-auto">
        <CardHeader className="mb-4 grid h-28 place-items-center bg-gradient-to-b from-[#ff9876]  via-[#ab67aa]  to-[#1cacb1]">
          <Typography variant="h3" color="white">
            login to Los Angels
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            className="bg-gradient-to-b from-[#ab67aa]  ]  to-[#1cacb1]"
            fullWidth>
            Login
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="/signUp"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold border-b">
              Create Account
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Login;
