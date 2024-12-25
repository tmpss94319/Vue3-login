<template>
    <div :class="styles.brand">
        <div :class="styles['brand-logo']">
            <nuxt-img src="/images/monkey_logo.jpg" alt="Optimized Logo" width="50" />
        </div>
        <div :class="styles['brand-name']">
            Brand Name
        </div>
    </div>
    <div :class="styles.login">
        <div :class="styles['login-card']">123</div>
    </div>
</template>

<script setup>
import styles from '@/assets/styles/pages/login.module.scss';
</script>

