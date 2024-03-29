const Services = () => {
  return (
    <section class="container mx-auto py-8 mt-40">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-40">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4">Service 1</h2>
          <p class="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            eleifend dolor nec fermentum condimentum.
          </p>
          <a
            href="#"
            class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Learn More
          </a>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4">Service 2</h2>
          <p class="text-gray-600">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
          <a
            href="#"
            class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Learn More
          </a>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4">Service 3</h2>
          <p class="text-gray-600">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam.
          </p>
          <a
            href="#"
            class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};
export default Services;
