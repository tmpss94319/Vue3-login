<template>
    <div :class="[styles.brand, 'flex gap-6']">
        <div :class="[styles['brand-logo']]">
            <nuxt-img src="/images/monkey_face_logo.png" alt="Optimized Logo" :class="['h-full']"/>
        </div>
        <div :class="[styles['brand-name'], 'text-zinc-50 flex items-center justify-center text-4xl']">
            MY LOGIN PAGE
        </div>
    </div>
    <div :class="[styles.login, 'flex items-center justify-center py-20']">
        <div :class="[styles['login-card'], 'w-96 bg-white shadow-lg rounded-xl p-6 pt-10 flex flex-col gap-4']">
            <div>
                <input 
                    type="text" 
                    id="username" 
                    placeholder="Account" 
                    :class="[styles['input'], 'w-full px-2 py-2 text-white placeholder-zinc-50']"
                />


            </div>
            <div>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Password" 
                    :class="[styles['input'], 'w-full px-2 py-2 text-white placeholder-zinc-50 mt-3']"
                />
            </div>
            <div class="text-right text-sm">
                <a href="#" class="text-zinc-50  hover:underline">Forgot Password?</a>
            </div>
            <div class="flex flex-col gap-2 mt-10">
                <button class="w-full bg-gray-700 bg-opacity-30 text-white py-2 rounded-md hover:bg-gray-900 hover:bg-opacity-50">
                    LOGIN
                </button>

                <button class="w-full bg-gray-200 bg-opacity-50 text-gray-800 py-2 rounded-md hover:bg-gray-300">
                    SIGN UP
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import styles from '@/assets/styles/pages/login.module.scss';
</script>

