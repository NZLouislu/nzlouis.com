"use client";

import React, { useState, useEffect } from "react";
import { Player } from "@remotion/player";
import { PropertyStatsVideo } from "./PropertyStatsVideo";
import { Box, Heading, Text, Card, Flex } from "@radix-ui/themes";

export default function RemotionDemo() {
    // Use state to ensure client-side only rendering for the Player
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Box id="remotion-demo" py="9" style={{ backgroundColor: "#f1f5f9" }}>
            <Box style={{ maxWidth: "1000px", margin: "0 auto" }} px="5">
                <Heading size="8" align="center" mb="4" color="indigo">
                    Automated Content Generation
                </Heading>
                <Text
                    as="p"
                    size="4"
                    align="center"
                    color="gray"
                    mb="8"
                    style={{ maxWidth: "700px", margin: "0 auto 2rem auto" }}
                >
                    This video is not a pre-rendered MP4. It is <strong>rendered dynamically in real-time</strong> using React code (Remotion).
                    I use this technology to automate weekly property market reports and data visualization.
                </Text>

                {mounted ? (
                    <Flex justify="center">
                        <Card
                            style={{
                                width: "100%",
                                maxWidth: "800px",
                                overflow: "hidden",
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                padding: 0,
                            }}
                        >
                            <Player
                                component={PropertyStatsVideo}
                                durationInFrames={150}
                                compositionWidth={1280}
                                compositionHeight={720}
                                fps={30}
                                controls
                                loop
                                acknowledgeRemotionLicense
                                style={{
                                    width: "100%",
                                    aspectRatio: "16/9",
                                }}
                            />
                        </Card>
                    </Flex>
                ) : (
                    <Flex justify="center" align="center" style={{ height: "450px", background: "#cbd5e1", borderRadius: "8px" }}>
                        <Text>Loading Video Engine...</Text>
                    </Flex>
                )}
            </Box>
        </Box>
    );
}
