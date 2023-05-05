<template>
    <div class="bg-white text-black w-[32%] rounded-[14px]">
        <div class="flex flex-row justify-between border-b-[1px] border-gray-500 font-['Inter']  py-[24px] px-[28px] font-[600] text-[16px]">
            <div class="flex flex-row gap-2 items-center text-[#F9B506]">
            <font-awesome-icon icon="fa-regular fa-bell" />
            <p>Action</p>
            </div>
            <div>
                <font-awesome-icon icon="fa-solid fa-ellipsis" class="cursor-pointer" />
            </div>
        </div>
        <div class="p-[22px]">
            <p class="font-['Inter'] text-[16px] font-[600]">Assigned actions</p>
            <p class="text-[#9DA8B4] font-[300] font-['Inter']">The selected actions will run in the background when the user journey gets to this element</p>
            <button class="flex flex-row justify-between border-[1px] border-[#E3E6E8] px-[22px] py-[25px] text-[#0052FF] font-[600] font-['Inter'] rounded-[20px] hover:bg-[#f2f2f3] w-full ">
                <p>Add Action</p>
                <font-awesome-icon icon="fa-solid fa-plus" />
            </button>
        </div>
    </div>
</template>