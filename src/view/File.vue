<template>
  <div class="w-full h-full">
    <nav class="w-full">
      <button>root</button>
      <ChevronRightIcon class="inline h-7"></ChevronRightIcon>
      <button>some dir</button>
      <ChevronRightIcon class="inline h-7"></ChevronRightIcon>
      <button>dir</button>
    </nav>
    <div class="border-black border-2 rounded-xl w-full h-full relative">
      <ul class="w-full p-8 overflow-auto">
        <li class="w-full pb-2">
          <button>
            <DocumentIcon class="h-7 inline"></DocumentIcon>test unknow file
          </button>
          <div class="float-right">
            <span class="mr-40">size: 1234</span>
            <input type="checkbox" id="" class="h-5 w-5" />
          </div>
        </li>
        <li class="w-full pb-2">
          <button>
            <DocumentTextIcon class="h-7 inline"></DocumentTextIcon>test text
            file
          </button>
          <div class="float-right">
            <span class="mr-40">size: 1234</span>
            <input type="checkbox" id="" class="h-5 w-5" />
          </div>
        </li>
        <li class="w-full pb-2">
          <button><FolderIcon class="h-7 inline"></FolderIcon>test dir</button>
          <div class="float-right">
            <span class="mr-40">size: 1234</span>
            <input type="checkbox" id="" class="h-5 w-5" />
          </div>
        </li>
      </ul>
      <div class="absolute bottom-0 right-0 px-4">
        <button class="px-2">
          <DocumentAddIcon class="h-10 inline"></DocumentAddIcon>New Dir
        </button>
        <button class="px-2">
          <FolderAddIcon class="h-10 inline"></FolderAddIcon>New File
        </button>
        <button class="px-2">
          <PencilAltIcon class="h-10 inline"></PencilAltIcon>Rename
        </button>
        <button class="px-2">
          <TrashIcon class="h-10 inline"></TrashIcon>Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ChevronRightIcon,
  FolderIcon,
  DocumentTextIcon,
  DocumentIcon,
  TrashIcon,
  FolderAddIcon,
  DocumentAddIcon,
  PencilAltIcon,
} from "@heroicons/vue/solid";
export default {
  name: "file",
  components: {
    ChevronRightIcon,
    FolderIcon,
    DocumentTextIcon,
    DocumentIcon,
    TrashIcon,
    FolderAddIcon,
    DocumentAddIcon,
    PencilAltIcon,
  },
};
</script>