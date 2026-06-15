const resultDiv = document.getElementById("result");

const tableBody = document.getElementById("tableBody");

const shortenBtn = document.getElementById("shortenBtn");

shortenBtn.addEventListener("click", shortenURL);

async function deleteURL(id) {
  const confirmed = confirm("Delete this URL?");

  if (!confirmed) return;

  try {
    const response = await fetch(`/api/v1/urls/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    alert(data.message);

    loadRecentURLs();
  } catch (error) {
    console.error(error);

    alert("Delete failed");
  }
}

async function shortenURL() {
  const input = document.getElementById("urlInput");

  const url = input.value.trim();

  if (!url) {
    alert("Please enter URL");
    return;
  }

  try {
    const response = await fetch("/api/v1/shorten", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        url,
      }),
    });

    const data = await response.json();

    const shortUrl = data.short_url;

    resultDiv.innerHTML = `
      <div class="bg-green-900 p-4 rounded-lg">

        <p class="mb-2">
          URL Created Successfully
        </p>

        <div class="flex gap-3">

          <a
            href="${shortUrl}"
            target="_blank"
            class="underline"
          >
            ${shortUrl}
          </a>

          <button
            onclick="copyURL('${shortUrl}')"
            class="bg-blue-600 px-3 py-1 rounded"
          >
            Copy
          </button>

        </div>

      </div>
    `;

    input.value = "";

    loadRecentURLs();
  } catch (error) {
    console.error(error);

    alert("Failed to create URL");
  }
}

function copyURL(url) {
  navigator.clipboard.writeText(url);

  alert("Copied");
}

async function loadRecentURLs() {
  try {
    const response = await fetch("/api/v1/urls");

    const urls = await response.json();

    tableBody.innerHTML = "";

    urls.reverse();

    urls.forEach((url) => {
      tableBody.innerHTML += `
        <tr class="border-b border-slate-700">

          <td class="py-3">
            <a
              href="${url.originalUrl}"
              target="_blank"
              class="text-blue-400"
            >
              ${url.originalUrl}
            </a>
          </td>

          <td class="py-3">

            <a
              href="/r/${url.shortCode}"
              target="_blank"
              class="text-green-400"
            >
              ${url.shortCode}
            </a>

          </td>

          <td class="py-3">

            ${url.clicks}

          </td>

          <td>

  <button
    onclick="deleteURL('${url._id}')"
    class="
      bg-red-600
      hover:bg-red-700
      px-3
      py-1
      rounded
    "
  >
    Delete
  </button>

</td>

        </tr>
      `;
    });
  } catch (error) {
    console.error(error);
  }
}

loadRecentURLs();
