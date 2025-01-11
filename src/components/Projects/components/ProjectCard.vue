<template>
    <div class="card">
        <a :href="project.url" target="_blank" class="image-section">
            <img :src="'/assets/projects/' + project.image" alt="Project Image" class="project-image" />
        </a>
        <div class="content-section">
            <h3 class="title">{{ project.title }}</h3>
            <p class="description">{{ project.description }}</p>
            <div class="stack">
                <span v-for="tech in project.details.stack" :key="tech" class="stack-item">
                    {{ tech }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    width: 320px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: #fff;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.image-section {
    display: block;
    position: relative;
    padding: 16px;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;
}

.project-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    transition: transform 0.3s ease;
    border-radius: 8px;
}

.image-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(var(--color-primary), 0.4), rgba(var(--color-secondary), 0.4));
    border-radius: 8px;
    pointer-events: none;
}

.image-section:hover .project-image {
    transform: scale(1.05);
}

.content-section {
    padding: 16px;
}

.title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 8px;
    color: #333;
    text-align: center;
}

.description {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 16px;
    text-align: center;
}

.stack {
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
}

.stack-item {
    font-size: 0.8rem;
    font-weight: 500;
    color: white;
    background-color: var(--color-primary);
    padding: 4px 8px;
    border-radius: 4px;
}
</style>
