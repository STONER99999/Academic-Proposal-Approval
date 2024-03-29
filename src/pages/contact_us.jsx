import { Input, Textarea } from "@material-tailwind/react";
const ContactUs = () => {
  return (
    <div class="container mx-auto py-10 ">
      <div class="max-w-2xl mx-auto  p-10 rounded-lg  mt-20">
        <h1 class="text-2xl font-bold mb-4">Contact Us</h1>

        <form class="space-y-4">
          <div>
            <label for="name" class="block mb-1">
              Your Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              class="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label for="email" class="block mb-1">
              Your Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              class="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label for="message" class="block mb-1">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              rows="5"
              class="w-full border rounded-lg px-4 py-2"
            ></Textarea>
          </div>

          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
