
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, SPACING, FONTS, BORDER_RADIUS } from '../theme/theme';
import { Flame, Trophy, Calendar } from 'lucide-react-native';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { ActivityCard } from '../components/ActivityCard';
import { ActivityType, calculateStrideLength, calculateSteps } from '../utils/calculator';

export const HomeScreen = ({ navigation }: any) => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [distance, setDistance] = useState('');
    const [activity, setActivity] = useState<ActivityType>('walking');

    useEffect(() => {
        // Load saved height and weight
        const loadData = async () => {
            try {
                const savedHeight = await AsyncStorage.getItem('user_height');
                const savedWeight = await AsyncStorage.getItem('user_weight');
                if (savedHeight) setHeight(savedHeight);
                if (savedWeight) setWeight(savedWeight);
            } catch (e) {
                console.error('Failed to load data', e);
            }
        };
        loadData();
    }, []);

    const handleCalculate = async () => {
        if (!height || !distance) {
            alert('Please fill in height and distance');
            return;
        }

        // Save height and weight for convenience
        try {
            await AsyncStorage.setItem('user_height', height);
            if (weight) await AsyncStorage.setItem('user_weight', weight);
        } catch (e) {
            console.error('Failed to save data', e);
        }

        const heightNum = parseFloat(height);
        const distanceNum = parseFloat(distance);
        const strideLength = calculateStrideLength(heightNum, activity);
        const steps = calculateSteps(distanceNum, strideLength);

        // Add to history
        try {
            const existingHistoryString = await AsyncStorage.getItem('stride_history');
            const history = existingHistoryString ? JSON.parse(existingHistoryString) : [];
            const newEntry = {
                steps,
                distance: distanceNum,
                activity,
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                timestamp: new Date().getTime()
            };

            // Keep only last 20 entries
            const updatedHistory = [...history, newEntry].slice(-20);
            await AsyncStorage.setItem('stride_history', JSON.stringify(updatedHistory));
        } catch (e) {
            console.error(e);
        }

        navigation.navigate('Result', {
            steps,
            distance: distanceNum,
            strideLength: strideLength.toFixed(1),
            activity
        });
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.greeting}>Hello, Stride!</Text>
                            <Text style={styles.title}>Dashboard</Text>
                        </View>
                        <TouchableOpacity style={styles.badge}>
                            <Trophy size={20} color={COLORS.primary} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.statsOverview}>
                        <View style={[styles.statBox, { backgroundColor: '#FFF7ED' }]}>
                            <Flame size={24} color="#F97316" />
                            <Text style={styles.statLine}>7 Day</Text>
                            <Text style={styles.statLabel}>Streak</Text>
                        </View>
                        <View style={[styles.statBox, { backgroundColor: COLORS.surfaceSubtle }]}>
                            <Calendar size={24} color={COLORS.primary} />
                            <Text style={styles.statLine}>12.5k</Text>
                            <Text style={styles.statLabel}>Avg Steps</Text>
                        </View>
                    </View>

                    <View style={styles.formCard}>
                        <Text style={styles.sectionTitle}>Calculate New Activity</Text>

                        <View style={styles.row}>
                            <CustomInput
                                label="Height"
                                value={height}
                                onChangeText={setHeight}
                                placeholder="175"
                                suffix="cm"
                                containerStyle={{ flex: 1, marginRight: SPACING.md }}
                            />
                            <CustomInput
                                label="Weight"
                                value={weight}
                                onChangeText={setWeight}
                                placeholder="70"
                                suffix="kg"
                                containerStyle={{ flex: 1 }}
                            />
                        </View>

                        <CustomInput
                            label="Distance to analyze"
                            value={distance}
                            onChangeText={setDistance}
                            placeholder="5.0"
                            suffix="km"
                        />

                        <Text style={styles.label}>Choose Activity</Text>
                        <View style={styles.activityContainer}>
                            <ActivityCard
                                type="walking"
                                selected={activity === 'walking'}
                                onPress={() => setActivity('walking')}
                            />
                            <View style={{ width: SPACING.md }} />
                            <ActivityCard
                                type="running"
                                selected={activity === 'running'}
                                onPress={() => setActivity('running')}
                            />
                        </View>

                        <CustomButton
                            title="Predict Steps"
                            onPress={handleCalculate}
                            style={styles.button}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    keyboardView: {
        flex: 1,
    },
    scrollContent: {
        padding: SPACING.lg,
        paddingTop: SPACING.xxl,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.xl,
    },
    greeting: {
        fontSize: 14,
        fontFamily: FONTS.semiBold,
        color: COLORS.textLight,
    },
    title: {
        fontSize: 32,
        fontFamily: FONTS.black,
        color: COLORS.text,
        letterSpacing: -1,
    },
    badge: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: COLORS.surfaceSubtle,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statsOverview: {
        flexDirection: 'row',
        gap: SPACING.md,
        marginBottom: SPACING.xl,
    },
    statBox: {
        flex: 1,
        padding: SPACING.lg,
        borderRadius: BORDER_RADIUS.lg,
        alignItems: 'flex-start',
    },
    statLine: {
        fontSize: 24,
        fontFamily: FONTS.black,
        color: COLORS.text,
        marginTop: SPACING.sm,
    },
    statLabel: {
        fontSize: 12,
        fontFamily: FONTS.bold,
        color: COLORS.textLight,
    },
    formCard: {
        backgroundColor: COLORS.surface,
        padding: SPACING.lg,
        borderRadius: BORDER_RADIUS.xl,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: FONTS.bold,
        color: COLORS.text,
        marginBottom: SPACING.lg,
    },
    row: {
        flexDirection: 'row',
        marginBottom: SPACING.md,
    },
    label: {
        fontSize: 14,
        fontFamily: FONTS.semiBold,
        color: COLORS.text,
        marginBottom: SPACING.sm,
        marginLeft: SPACING.xs,
        marginTop: SPACING.md,
    },
    activityContainer: {
        flexDirection: 'row',
        marginBottom: SPACING.lg,
    },
    button: {
        marginTop: SPACING.lg,
        height: 60,
    }
});
